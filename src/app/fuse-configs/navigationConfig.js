import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		translate: 'DASHBOARD',
		type: 'item',
		icon: 'dashboard',
		url: '/dashboard'
	},
	{
		id: 'cmcmanagement',
		title: 'CMC Management',
		translate: 'CMCMANAGEMENT',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'products',
				title: 'Products',
				translate: 'PRODUCTS',
				type: 'item',
				icon: 'shopping_basket',
				url: '/products'
			},
			{
				id: 'sevices',
				title: 'Services',
				translate: 'SERVICES',
				type: 'item',
				icon: 'room_service',
				url: '/services'
			},
			{
				id: 'packages',
				title: 'Packages',
				translate: 'PACKAGES',
				type: 'item',
				icon: 'local_hospital',
				url: '/packages'
			},
			{
				id: 'events',
				title: 'Events',
				translate: 'EVENTS',
				type: 'item',
				icon: 'event',
				url: '/events'
			}
		],

	},
];

export default navigationConfig;
