import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
	state() {
		return {
			fullname: 'John Doe',
			password: 'user1234',
			username: 'user'
		}
	},
	actions: {
		login( payload ) {
			const { username, password } = payload
			if ( username === this.username && password === this.password ) return true
			else return false
		}
	}
})
