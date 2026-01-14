import time
from playwright.sync_api import sync_playwright

def verify_ui_polish():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Increase viewport to see both desktop layout elements
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Navigate to the app (assuming Vite default port 5173)
        page.goto("http://localhost:5173")

        # Wait for the app to load
        page.wait_for_selector("text=108 Thirupathigal")

        # Wait for map markers to appear
        time.sleep(3)

        # Take a screenshot of the initial desktop view
        page.screenshot(path="verification/desktop_view.png")
        print("Desktop screenshot taken.")

        # Simulate mobile view
        page.set_viewport_size({"width": 375, "height": 667})
        time.sleep(1)

        # Check for the floating toggle pill using exact button role
        # The buttons are "List" and "Map"
        list_btn = page.get_by_role("button", name="List")
        map_btn = page.get_by_role("button", name="Map")

        if list_btn.is_visible() and map_btn.is_visible():
             print("Mobile toggle buttons found.")

        # Take a screenshot of the mobile view (map mode)
        page.screenshot(path="verification/mobile_map_view.png")
        print("Mobile Map screenshot taken.")

        # Click "List" to toggle view
        list_btn.click()
        time.sleep(1)

        # Take a screenshot of the mobile list view
        page.screenshot(path="verification/mobile_list_view.png")
        print("Mobile List screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_ui_polish()
