import i18next from 'i18next';
import PackageOrders from './PackageOrders';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'examplePage', en);
i18next.addResourceBundle('tr', 'examplePage', tr);
i18next.addResourceBundle('ar', 'examplePage', ar);

const PackageOrdersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/packageorders',
			component: PackageOrders
        }
	]
};

export default PackageOrdersConfig;
