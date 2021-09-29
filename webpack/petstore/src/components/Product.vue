<template>
  <div>
    <my-header></my-header>
    <!-- Доступ к переаднному параметру осуществлется через $route.params-->
    <h1> This is the id {{ $route.params.id }}</h1>
    <div class="row">
      <div class="col-md-5 col-md-offset-0">
        <figure>
          <img class="product" v-bind:src="product.image" >
        </figure>
      </div>
      <div class="col-md-6 col-md-offset-0 description">
        <h1>{{product.title}}</h1>
        <p v-html="product.description"></p>
        <p class="price">
          {{product.price }}
        </p>
        <button @click="edit">Edit Product</button>
        <router-view></router-view> 
      </div>
    </div>
  </div>
  </template>
  <script>
  import MyHeader from './Header.vue'
  export default {
    components: { MyHeader },
    data() {
    return {
      product: ''
    }
  },
  methods: {
      edit() {
        this.$router.push({name: 'Edit'})
      }
  },
  created: function() {
    axios.get('/static/products.json')
    .then((response) =>{
      this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0]
      // !!! Добавляем (/), чтобы были абсолютные пути к файлам
      // !!! Если у нас прописаны полные пути (в примере так и есть), то не надо 
      // this.product.image = '/' + this.product.image;
      this.product.image = this.product.image;
    });
  }
}
</script>