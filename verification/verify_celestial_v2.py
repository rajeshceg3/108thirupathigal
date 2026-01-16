from playwright.sync_api import sync_playwright

def verify_map_logic():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a desktop viewport to ensure the sidebar is visible
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # 1. Navigate to the app
        print("Navigating to app...")
        page.goto("http://localhost:5173")
        page.wait_for_load_state("networkidle")

        # 2. Verify Error Boundary didn't trigger
        print("Verifying initial load...")
        page.wait_for_selector("text=108 Thirupathigal")

        # 3. Test Celestial Location Logic
        print("Searching for Celestial location...")

        # Use a more specific selector for the input
        search_input = page.locator("input[placeholder='Search destinations...']")
        search_input.wait_for(state="visible", timeout=10000)
        search_input.fill("Tirupparkatal")

        # Wait for filtering to happen
        page.wait_for_timeout(1000)

        # Click the location card
        print("Clicking location card...")
        # Use a more robust selector for the card
        # Location 107 is what we expect.
        card = page.locator("text=Tirupparkatal").first
        card.click()

        # Wait for UI update
        page.wait_for_timeout(1000)

        # Check if the "Celestial Domain" overlay appears
        print("Checking for celestial overlay...")
        overlay = page.locator("text=Celestial Domain")

        try:
            overlay.wait_for(state="visible", timeout=5000)
            print("SUCCESS: Celestial overlay is visible.")
        except:
            print("FAILURE: Celestial overlay not found.")
            page.screenshot(path="verification/debug_celestial_fail.png")

        # 4. Take Verification Screenshot
        print("Taking verification screenshot...")
        page.screenshot(path="verification/celestial_check.png")

        browser.close()

if __name__ == "__main__":
    verify_map_logic()
