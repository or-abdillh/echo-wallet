import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Login',
		path: '/login',
		component: () => import('@/views/Login.vue')
	},
	{
		name: 'Marketplace',
		path: '/market',
		component: () => import('@/views/MarketPlace.vue')

	},
	{
		name: 'Deposit',
		path: '/deposit',
		component: () => import('@/views/Deposit.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
