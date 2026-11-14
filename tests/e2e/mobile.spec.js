import {test,expect} from '@playwright/test';
for(const width of [320,390,1280])for(const reducedMotion of ['no-preference','reduce'])test(`${width}px ${reducedMotion} temple explorer`,async({page},info)=>{
 test.setTimeout(120000);await page.setViewportSize({width,height:844});await page.emulateMedia({reducedMotion});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
 const rendered=()=>page.waitForFunction(()=>{const m=document.querySelector('.leaflet-container')._warmMap;return m&&m.isStyleLoaded()&&m.queryRenderedFeatures().length>0},null,{timeout:45000});await rendered();
 await expect(page.getByRole('dialog',{name:'Explore temples'})).not.toBeVisible();await expect(page.getByRole('button',{name:'Explore temples',exact:true})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 if(reducedMotion==='no-preference')await page.screenshot({path:info.outputPath(`108-map-${width}.png`)});
 await page.getByRole('button',{name:'Explore temples',exact:true}).click();const panel=page.getByRole('dialog',{name:'Explore temples'});await expect(panel.getByLabel('Close Explore')).toBeFocused();await expect(panel.getByRole('button',{name:/^Select /})).toHaveCount(108);
 for(const name of ['Zoom in','Zoom out','Reset map'])await panel.getByRole('button',{name,exact:true}).click();
 if(reducedMotion==='no-preference')await page.screenshot({path:info.outputPath(`108-panel-${width}.png`)});
 const search=panel.getByPlaceholder('Search destinations...');await search.fill('zzq-nothing');await expect(panel.getByText('No locations found')).toBeVisible();await search.fill('Ranganathaswamy Temple, Srirangam');await expect(panel.getByRole('button',{name:/^Select /})).toHaveCount(1);await search.fill('');await expect(panel.getByRole('button',{name:/^Select /})).toHaveCount(108);
 const names=await panel.getByRole('button',{name:/^Select /}).evaluateAll(els=>els.map(el=>el.getAttribute('aria-label')));
 // Representative terrestrial temples and both celestial entries at every width.
 const selectedNames=names.filter((_,i)=>i<4||i>=106);
 for(let i=0;i<selectedNames.length;i++){
  if(i>0)await page.getByRole('button',{name:'Explore temples',exact:true}).click();
  const card=panel.getByRole('button',{name:selectedNames[i],exact:true});await card.scrollIntoViewIfNeeded();await card.click();const dialog=page.getByRole('dialog').filter({has:page.getByLabel('Close modal')});await expect(dialog).toBeVisible();await expect(dialog.getByLabel('Close modal')).toBeFocused();
  if(i===0){await rendered();const bounds=await dialog.boundingBox();expect(bounds.x).toBeGreaterThanOrEqual(0);expect(bounds.x+bounds.width).toBeLessThanOrEqual(width+1);if(reducedMotion==='no-preference')await page.screenshot({path:info.outputPath(`108-detail-${width}.png`)});await page.keyboard.press('Shift+Tab');await expect(dialog.locator(':focus')).toHaveCount(1);}
  await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(page.getByRole('button',{name:'Explore temples',exact:true})).toBeFocused();
 }
 await page.getByRole('button',{name:'Explore temples',exact:true}).click();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Explore temples',exact:true})).toBeFocused();expect(errors).toEqual([]);
});
