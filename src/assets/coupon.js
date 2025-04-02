const endDateOne = new Date('Sept 25 2025 20:00:00').getTime(),
	endDateTwo = new Date('Oct 25 2025').getTime(),
	endDateThree = new Date('Nov 20 2025').getTime();

export const coupons = [
	{
		id: 1,
		couponCode: 'CYPHER25',
		couponName: 'cypher gift voucher',
		percentageOff: 8,
		endDate: endDateOne,
		isActive: new Date().getTime() < endDateOne ? 'Active' : 'Inactive',
		minPriceValid: 3000,
		imgUrl:
			'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75',
		description: 'This coupon code will apply  when you shop more than',
	},
	{
		id: 2,
		couponCode: 'SUMMER25',
		couponName: 'summer gift voucher',
		percentageOff: 10,
		endDate: endDateTwo,
		isActive: new Date().getTime() < endDateTwo ? 'Active' : 'Inactive',
		minPriceValid: 4500,
		imgUrl:
			'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75',
		description: 'This coupon code will apply  when you shop more than',
	},
	{
		id: 3,
		couponCode: 'WINTER25',
		couponName: 'winter gift voucher',
		percentageOff: 10,
		endDate: endDateThree,
		isActive: new Date().getTime() < endDateThree ? 'Active' : 'Inactive',
		minPriceValid: 4000,
		imgUrl:
			'https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=128&q=75',
		description: 'This coupon code will apply  when you shop more than',
	},
];

export const minLimitFreeDelivery = '5000';
