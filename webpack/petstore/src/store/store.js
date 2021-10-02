import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products'

Vue.use(Vuex);

// Глобальное хранилище Vuex
/* 
// Пример без использования модулей
export const store = new Vuex.Store({
		state: {
				products: {}
		},
		// Объект с функцией для инициализации хранилища
		mutations: {
				'SET_STORE' (state, products) {
						state.products = products;
				}
		},

		// Асинхронность
		actions: {
				// Вызываем мутацию
				initStore: ({commit}) => {
						axios.get('static/products.json')
						.then((response) => {
								console.log(response.data.products);
								commit('SET_STORE', response.data.products)
						})
				}
		},

		getters: {
				//  Возвращем списко товаров
				products: state => state.products
		}
});
*/


export const store = new Vuex.Store({
		modules: {
				products
		}
});