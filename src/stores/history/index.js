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
			]
		}
	}
})
