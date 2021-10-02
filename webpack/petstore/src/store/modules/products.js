const state = {
		products: {}
};

// Объект с функцией для инициализации хранилища
const mutations = {
		'SET_STORE' (state, products) {
				state.products = products;
		}
}

// Асинхронность
const actions = {
		// Вызываем мутацию
		initStore: ({commit}) => {
				axios.get('static/products.json')
				.then((response) => {
						console.log(response.data.products);
						commit('SET_STORE', response.data.products)
				})
		}
}

const getters = {
		//  Возвращем списко товаров
		products: state => state.products
}


export default {
		state,
		getters,
		actions,
		mutations
}