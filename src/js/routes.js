import { utils } from '../core/js/utils.js';
/* global vSettings */

export const routes = {
	init: async () => {
		const get = utils.getQueryParams();
		if (get.page && get.page === 'home') {
			// Home Page
			await utils.loadModule('pages/home.html','content');
			utils.setTitle(`${vSettings.brand} | Home`);
		} else if (get.page && get.page === 'demo') {
			// Demo
			await utils.loadModule('pages/demo.html','content', (pageContent) => {
				return pageContent.split('[brand]').join(vSettings.brand);
			});
			utils.setTitle(`${vSettings.brand} Demo`);
		} else if (get.page && get.page === 'documentation') {
			// Documentation
			await utils.loadModule('pages/documentation.html','content', (pageContent) => {
				return pageContent.split('[brand]').join(vSettings.brand);
			});
			utils.setTitle(`${vSettings.brand} Documentation`);
		} else if (get.page) {
			// automatically catch any pages without dedicated routes
			const cleanPage = utils.cleanString(get.page);
			const cleanTitle = utils.titleCase(cleanPage);
			await utils.loadModule(`pages/${cleanPage}.html`,'content');
			utils.setTitle(`${vSettings.brand} | ${cleanTitle}`);
		} else {
			// load home page if no page= variable specified in URL
			await utils.loadModule('pages/home.html','content');
			utils.setTitle(`${vSettings.brand}`);
			utils.setDescription(`ProgUX is the best library to make web faster`);
		}
		utils.scrollTo();
		return true;
	},
}
