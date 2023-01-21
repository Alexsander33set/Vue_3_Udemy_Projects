import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products:[],
    productsSelected:[],
    apiCall:'https://fakestoreapi.com/products?limit=3',
    ProductsInCall: '3',
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    },
    loadSelected(state, products){
      state.productsSelected = products
    },
    addToBag(state, product){
      state.productsSelected.push(product)
      localStorage.setItem('productsSelected',JSON.stringify(state.productsSelected))
    },
    removeFromBag(state, productId){
      var updatedBag = state.productsSelected
      .filter(item => productId != item.id)
      state.productsSelected = updatedBag
      localStorage.setItem('productsSelected',JSON.stringify(updatedBag))
    },
  },
  actions: {
    loadProducts({commit}){
      axios
      .get('https://fakestoreapi.com/products?')
            .then((response) =>{
              console.log(response.data)
              commit('loadProducts', response.data)
            })
    },
    loadSelected({commit}){
      if (localStorage.getItem('productsSelected')){
        commit('loadSelected', JSON.parse(localStorage.getItem('productsSelected')))
      }
    },
    addToBag({commit}, product){
      commit('addToBag', product)
    },
    removeFromBag({commit}, productId){
      commit('removeFromBag', productId)
    },
  },
  modules: {
  }
})
