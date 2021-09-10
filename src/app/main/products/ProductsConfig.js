import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import React from 'react';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const ProductsConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
        {
            path     : '/products/:productId/:productHandle?',
            component: React.lazy(() => import('./product/Product'))
        },
		{
			path: '/products',
            component: React.lazy(() => import('./Products'))
        },
       
	]
};

export default ProductsConfig;
