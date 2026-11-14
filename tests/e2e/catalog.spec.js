import {test,expect} from '@playwright/test';
for(let chunk=0;chunk<4;chunk++)test(`catalog chunk ${chunk}`,async({page})=>{
 test.setTimeout(100000);await page.setViewportSize({width:390,height:844});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await page.getByRole('button',{name:'Explore temples',exact:true}).click();const panel=page.getByRole('dialog',{name:'Explore temples'});await expect(panel.getByRole('button',{name:/^Select /})).toHaveCount(108);const names=await panel.getByRole('button',{name:/^Select /}).evaluateAll(els=>els.map(el=>el.getAttribute('aria-label')));
 for(let i=chunk*27;i<(chunk+1)*27;i++){
  if(i!==chunk*27)await page.getByRole('button',{name:'Explore temples',exact:true}).click();const card=panel.getByRole('button',{name:names[i],exact:true});await card.scrollIntoViewIfNeeded();await card.click();const dialog=page.getByRole('dialog').filter({has:page.getByLabel('Close modal')});await expect(dialog).toHaveAttribute('aria-label',names[i].replace(/^Select /,''));await expect(dialog.getByLabel('Close modal')).toBeFocused();await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();
 }
});
