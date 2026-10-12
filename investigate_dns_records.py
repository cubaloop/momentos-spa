import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1400, "height": 1800})
        try:
            print("1. Logging in...", flush=True)
            await page.goto("https://ccp.cloudaccess.net/clientarea.php", timeout=30000)
            await page.fill("input[name='username']", "momentospahabana@gmail.com")
            await page.fill("input[name='password']", "MomentospahabanaAliet*2025")
            await page.click("input[type='submit'], button[type='submit']")
            await page.wait_for_timeout(4000)
            
            print("2. Opening Bolt DNS...", flush=True)
            await page.goto("https://ccp.cloudaccess.net/cloudaccess/cloud-control-panel/bolt-dns.php?domain=momentospahabana.com&id=31215", timeout=30000)
            await page.wait_for_timeout(3000)
            
            # Print all inputs to find where 136.244.108.88 and 2607:1b00:93b2:e42c::5096 come from
            inputs = await page.query_selector_all("input[name*='content']")
            for inp in inputs:
                val = await inp.get_attribute("value")
                nm = await inp.get_attribute("name")
                print(f"Record: {nm} -> {val}", flush=True)
                
            # Check Cloudflare toggle or other options
            cf_links = await page.query_selector_all("a[href*='cloudflare'], img[src*='cloudflare']")
            print(f"Cloudflare elements: {len(cf_links)}", flush=True)

        except Exception as e:
            print(f"Exception: {e}", flush=True)
        finally:
            await browser.close()
            print("Done.", flush=True)

asyncio.run(run())
