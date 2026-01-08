from playwright.sync_api import sync_playwright

def verify_login_missing_config():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000")
            # Wait for the element that indicates auth is not configured
            # The text "Auth not configured" should be present
            page.wait_for_selector("text=Auth not configured")
            page.screenshot(path="verification/login_verification.png")
            print("Screenshot taken successfully")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_login_missing_config()
