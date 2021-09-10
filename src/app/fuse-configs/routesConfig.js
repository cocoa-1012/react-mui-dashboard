import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ProductsConfig from 'app/main/products/ProductsConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import ProductsOrdersConfig from 'app/main/productsOrders/ProductsOrdersConfig';
import ServicesConfig from 'app/main/services/ServicesConfig';
import ServiceOrdersConfig from 'app/main/serviceOrders/ServiceOrdersConfig';
import CouponsConfig from 'app/main/coupons/CouponsConfig';
import EventsConfig from 'app/main/events/EventsConfig';
import EventOrdersConfig from 'app/main/eventOrders/EventOrdersConfig';
import LoyaltyConfig from 'app/main/loyalty/LoyaltyConfig';
import PackagesConfig from 'app/main/packages/PackagesConfig';
import PackageOrdersConfig from 'app/main/packageOrders/PackageOrdersConfig';
import { LoginConfig } from 'app/main/login/LoginConfig';
import { RegisterConfig } from 'app/main/register/RegisterConfig';
import { authRoles } from 'app/auth';

const routeConfigs = [
	DashboardConfig,
	ProductsConfig,
	ProductsOrdersConfig,
	ServicesConfig,
	ServiceOrdersConfig,
	CouponsConfig,
	EventsConfig,
	EventOrdersConfig,
	LoyaltyConfig,
	PackagesConfig,
	PackageOrdersConfig,
	LoginConfig,
	RegisterConfig,
];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, authRoles.admin),
	{
		path: '/',
		component: () => <Redirect to="/products" />
	}
];

export default routes;
