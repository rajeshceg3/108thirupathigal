from playwright.sync_api import sync_playwright

def verify_map_logic():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 720})
        page = context.new_page()

        # 1. Navigate to the app
        print("Navigating to app...")
        page.goto("http://localhost:5173")
        page.wait_for_load_state("networkidle")

        # 2. Verify Error Boundary didn't trigger (i.e. we see the app)
        print("Verifying initial load...")
        page.wait_for_selector("text=108 Thirupathigal")

        # 3. Test Celestial Location Logic
        # Location 107 is Tirupparkatal (Celestial). ID 107.
        # We need to find the card for it in the sidebar.
        # Since it's at the bottom, we might need to search or scroll.
        # Let's use the search bar.
        print("Searching for Celestial location...")
        page.fill("input[placeholder='Search locations...']", "Tirupparkatal")
        page.wait_for_timeout(500) # Wait for debounce

        # Click the location card
        print("Clicking location card...")
        # The card logic in LocationCard.tsx: onClick={() => onSelect(loc.id)}
        # We'll click the first result
        card = page.locator("div.group.relative").first
        card.click()

        # Wait for potential animation
        page.wait_for_timeout(1000)

        # Check if the "Celestial Domain" overlay appears
        print("Checking for celestial overlay...")
        # The overlay has text "Celestial Domain"
        overlay = page.locator("text=Celestial Domain")

        if overlay.is_visible():
            print("SUCCESS: Celestial overlay is visible.")
        else:
            print("FAILURE: Celestial overlay not found.")
            # Take debug screenshot
            page.screenshot(path="verification/debug_celestial_fail.png")

        # 4. Take Verification Screenshot
        print("Taking verification screenshot...")
        page.screenshot(path="verification/celestial_check.png")

        browser.close()

if __name__ == "__main__":
    verify_map_logic()
