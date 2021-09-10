import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import React from 'react';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const EventsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
        {
            path     : '/events/:eventId/:eventHandle?',
            component: React.lazy(() => import('./event/Event'))
        },
		{
			path: '/events',
            component: React.lazy(() => import('./Events'))
        },
       
	]
};

export default EventsConfig;
