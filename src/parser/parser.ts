import {
  Browser,
  Page,
	JSHandle,
	ElementHandle,
} from 'puppeteer';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

import config from './config';
import { finder } from '../utils/finder';
import { PATTERNS } from '../constants/patterns';

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
					return el;
					// const firstChild = el.firstElementChild;
					// if (firstChild && firstChild.children.length >= 3) {
					// 	return firstChild.children[2].innerHTML; // Access the third child (index 2)
					// }
					// return ''; // Return null if no third child exists
				}, elementHandle)
			)
		) ?? [''];

		// console.log('arrayOfTitles ', arrayOfTitles);

		// finder(arrayOfTitles, PATTERNS);

		// const mainParent = await page.$$('[class*="virtual-list--"]');

		// console.log(mainParent);

	function getClassName(el: HTMLElement): string {
		return el.className;
	}
	
	function getChildCount(el: HTMLElement): number {
			return el.children.length;
	}

	function getChildren(el: HTMLElement): Element[] {
		return Array.from(el.children);
	}


		const test = await page.$$('[class*="sport-base-event__main__caption--"] a');

		const lol = await Promise.all(
			test.map(async (elementHandle) => {
			  const handle: any = await page.evaluateHandle(el => {
					return el.closest('[class^="virtual-list--"]')?.parentElement; // Return the DOM element
				}, elementHandle);
				// continue work with handle

				if (handle) {
					const className = await handle.evaluate(getClassName);

					const childCount = await handle.evaluate(getChildCount);

					const getNodes = await handle.evaluate((el: Element) => Array.from(el.children).map(child => child.outerHTML));

          console.log(getNodes); // Logs the HTML string of the child nodes

					return { handle, className, childCount, getNodes };
			}

				return handle;
			})
				// page.evaluate(el => {
				// 	// const firstChild = el.firstElementChild;
				// 	// if (firstChild && firstChild.children.length >= 3) {
				// 	// 	return firstChild.children[2].innerHTML; // Access the third child (index 2)
				// 	// }
				// return el.closest('[class^="virtual-list--"]')?.parentElement?.innerHTML;
				// }, elementHandle)
		)

	console.log(lol)

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
// class="sport-base-event__main__caption--JLR1n _clickable--RtjIi _inline--i_48A"

// virtual-list--

