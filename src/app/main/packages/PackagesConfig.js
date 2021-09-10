import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import React from 'react';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const PackagesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
        {
            path     : '/packages/:packageId/:packageHandle?',
            component: React.lazy(() => import('./package/Package'))
        },
		{
			path: '/packages',
            component: React.lazy(() => import('./Packages'))
        },
       
	]
};

export default PackagesConfig;
