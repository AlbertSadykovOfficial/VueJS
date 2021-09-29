<template>

    <header>
      <div class="navbar navbar-default">
        <div class="navbar-header">

          <!-- Оформление ссыки на компонент по имени -->
        
          <h1><router-link :to="{name: 'iMain'}">{{ sitename }}</router-link></h1>
        </div>
        <div class="nav navbar-nav navbar-right cart">

            <!-- Оформление ссыки на компонент по имени (to) 
                 Применение класса при активном приложении (active-class)_

                 Атрбут tag указывает в какой элемент будет преобразован router 
            -->

            <router-link 
                          active-class="active" 
                          tag="button" 
                          class="btn btn-default btn-lg" 
                          :to="{name: 'Form'}">
            
            <span class="glyphicon glyphicon-shopping-cart">{{ cartItemCount }}</span> Checkout
            </router-link>
          </button>
        </div>
      </div>
    </header>

</template>

<script>
    export default {
      name: 'my-header',
      data () {
        return {
        sitename: "Vue.js Pet Depot",
        }
      },
      props: ['cartItemCount'],
      methods: {
        showCheckout() {
          this.$router.push({name: 'Form'}); // Направляем приложение по маршруту Form
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: blue;
}
</style>