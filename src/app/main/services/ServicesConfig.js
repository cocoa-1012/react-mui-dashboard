import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import React from 'react';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ServicesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
            path     : '/services/:serviceId/:serviceHandle?',
            component: React.lazy(() => import('./Service/Service'))
        },
		{
			path: '/services',
			component: React.lazy(() => import('./Services'))
        }
	]
};

export default ServicesConfig;
