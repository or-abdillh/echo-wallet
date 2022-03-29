import { defineStore } from 'pinia'

export const useHistory = defineStore('history', {
	state() {
		return {
			deposit: [
				{
					title: 'Kardus',
					description: '3kg Rp128.000,00,-',
					thumbnail: '/trash.jpg'
				},
				{
					title: 'Kardus',
					description: '3kg Rp128.000,00,-',
					thumbnail: '/trash.jpg'
				},
				{
					title: 'Kardus',
					description: '3kg Rp128.000,00,-',
					thumbnail: '/trash.jpg'
				}
			],
			carts: [
				{
					title: 'Tas plastik',
					description: '1 items Rp.45.000,00,-',
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					description: '1 items Rp.45.000,00,-',
					timestamp: '20/03/2022'
				},
				{
					title: 'Tas plastik',
					description: '1 items Rp.45.000,00,-',
					timestamp: '20/03/2022'
				}
			]
		}
	}
})
