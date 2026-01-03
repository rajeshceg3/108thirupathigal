# Deployment Intelligence Brief

**Mission:** Secure Repository Analysis & Production Deployment
**Target:** 108-thirupathigal
**Architect:** Jules (DevSecOps)

---

## 📌 A. Repository Intelligence Summary

**Identity:** A React Single Page Application (SPA) designed to track/list "108 Thirupathigal" (pilgrimage sites).
**Tech Stack:**
*   **Runtime:** Browser (Client-side only)
*   **Framework:** React 18 (migrated from unstable/hallucinated React 19 references)
*   **Build System:** Vite 5 + TypeScript
*   **Styling:** Tailwind CSS
*   **Mapping:** Leaflet + React-Leaflet
*   **Package Manager:** npm

**Operational Context:**
The application is a standard static site. It expects no backend (API calls are mocked/static in `App.tsx`). It relies on `leaflet` CSS being present.

**Forensic Findings:**
*   **Critical File Integrity Issue:** The original `package.json` was corrupt, containing duplicate keys and references to non-existent future versions (`react@19.1.0`, `vite@7.0.5`). This required immediate reconstruction to stable versions (`react@18.2.0`, `vite@5.1.4`).
*   **Documentation Void:** `README.md` was effectively empty.
*   **Test Fragility:** Existing tests were checking for UI elements ("Status: Recovery Mode") that did not exist in the actual `App.tsx`, causing CI failure.

---

## 🚨 B. Critical Risks & Findings

### 1. Supply Chain Hallucinations (Critical)
*   **Finding:** The repo requested `react^19.1.0` and `vite^7.0.5`. These versions do not exist on public registries.
*   **Impact:** `npm install` fails or pulls malware if a private registry isn't configured. Total build blocker.
*   **Remediation:** Downgraded to latest stable Long Term Support (LTS) versions (React 18, Vite 5).

### 2. Broken Dependency State (High)
*   **Finding:** `package.json` had duplicate keys (merge conflict artifact).
*   **Impact:** Indeterminate dependency tree.
*   **Remediation:** Manually consolidated dependencies, prioritizing necessary runtime libraries (`leaflet`) and standard dev tools (`vitest`, `eslint`).

### 3. CI/CD Absence (Medium)
*   **Finding:** No CI/CD pipeline existed.
*   **Impact:** Manual deployments, no validation, high risk of regression.
*   **Remediation:** Implemented GitHub Actions workflow.

---

## 🧠 C. Deployment Strategy Decision

**Selected Target:** **GitHub Pages**

**Justification:**
1.  **Architecture Fit:** The app is a 100% static SPA. It requires no server-side processing (SSR) or database connections.
2.  **Operational Simplicity:** GitHub Pages provides zero-config SSL, global CDN, and automatic deployments from the repo. No complex infrastructure to manage.
3.  **Cost/Efficiency:** Free tier eligible, no idle costs.
4.  **Security:** Static files reduce attack surface to zero (no server to patch). `permissions: pages: write` uses OIDC, eliminating long-lived secrets.

**Rejected Alternatives:**
*   **Docker/Kubernetes:** Over-engineering. Adds container orchestration overhead for a static file set.
*   **AWS S3 + CloudFront:** Good for scale, but adds unnecessary complexity (IAM, Terraform state) compared to the integrated nature of GitHub Pages for this repository context.

---

## 🧾 D. GitHub Actions Workflow (Production-Ready)

The implemented pipeline (`.github/workflows/deploy.yml`) focuses on:

1.  **Strict Validation:**
    *   `npm ci`: Clean install (no lockfile modification).
    *   `lint`: Ensures code quality.
    *   `typecheck`: Verifies TypeScript integrity (`tsc --noEmit`).
    *   `test`: Runs Vitest suite.

2.  **Secure Build:**
    *   Builds to `dist/`.
    *   Uses `actions/upload-pages-artifact` for secure handoff.

3.  **OIDC Deployment:**
    *   Uses `permissions` (id-token: write) instead of Personal Access Tokens (PATs).
    *   Deploys only from `main` branch.

---

## 🛠 E. Hardening & Future Improvements

1.  **CSP Headers:** Configure Content Security Policy to restrict Leaflet tile sources (currently OpenStreetMap).
2.  **Visual Regression Testing:** Integrate Playwright deeply into CI to catch map rendering issues.
3.  **Semantic Versioning:** Implement `semantic-release` to tag releases automatically.
