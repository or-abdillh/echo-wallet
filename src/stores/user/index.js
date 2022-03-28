import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
	state() {
		return {
			fullname: 'John Doe'
		}
	}
})
