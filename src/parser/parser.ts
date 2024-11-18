import {
  Browser,
  Page,
} from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import config from './config';
import { finder } from '../utils/finder';

puppeteer.use(StealthPlugin());

function delay(time: number) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
};

const url = 'https://fon.bet';

const parser = async () => {
  const browser: Browser = await puppeteer.launch(config);
  const page: Page = await browser.newPage();

	const pages = await browser.pages();
	if (pages.length) {
		await pages[0].close();
	}

	try {
		await delay(2000);
		await page.goto(url);
		await delay(2000);

		await page.waitForSelector('a[href="/live?restorePreviousUrl=1"]');
		const liveButton = await page.$('a[href="/live?restorePreviousUrl=1"]');
		liveButton?.click();
		await delay(5000);

		await page.waitForSelector('a[href="/live/basketball"]');
		const basketballButton = await page.$('a[href="/live/basketball"]');
		basketballButton?.click();
		await delay(1000);

		const elements = await page.$$('[class*="sport-competition-wrap--"]');

		const arrayOfTitles = await Promise.all(
			elements.map(elementHandle =>
				page.evaluate(el => {
					const firstChild = el.firstElementChild;
					if (firstChild && firstChild.children.length >= 3) {
						return firstChild.children[2].innerHTML; // Access the third child (index 2)
					}
					return null; // Return null if no third child exists
				}, elementHandle)
			)
		) ?? [''];

		console.log('arrayOfTitles ', arrayOfTitles);

		finder(arrayOfTitles);

	} catch (e) {
		console.error('Sorry, you are gay: ', e)
	}
};

export default parser;

// elements  [
// 	CdpElementHandle {
// 	  isolatedHandle: undefined,
// 	  handle: CdpJSHandle {},
// 	  [Symbol(_isElementHandle)]: true
// 	},
// ]