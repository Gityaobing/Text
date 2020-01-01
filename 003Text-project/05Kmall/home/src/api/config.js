var API_CONFIG = {
	login: 					['/sessions/users','post'],
	getUsername: 			['/sessions/username','get'],
	logout: 				['/sessions/user','get'],
	getUsernames: 			['/sessions/users','get'],

	register: 				['/users','post'],
	checkUsername: 			['/users/checkUsername','get'],
	updatepswd: 			['/users','put'],

	getCategories: 			['/categories/homeCategories','get'],
	getHomeAds: 			['/ads/positionAds','get'],
	getFloors: 				['/floors','get'],

	getProductsList: 		['/products/list','get'],
	getProductsDetail: 		['/products/detail','get'],

	addCarts: 				['/carts','post'],
	getCartsCount: 			['/carts/count','get'],
	updateCartsChoices: 	['/carts/choices','put'],
	deleteCarts: 			['/carts','delete'],
	updateCartsCount: 		['/carts/counts','put'],
	getCarts: 				['/carts','get'],

	getOrdersList:   		['/orders/products','get'],
	addShippings:   		['/shippings','post'],
	getShippings:   		['/shippings/list','get'],
	deleteShippings:   		['/shippings','delete'],
}

module.exports = {
	API_CONFIG
}

