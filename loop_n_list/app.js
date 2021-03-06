var APP_LOG_LIFECYCLE_EVENTS = true;
var webstore = new Vue({
    el: "#app",
    data: {
      showProduct: true,
      sitename: "Vue.js Pet Depot", // При этом в переменной webstore создается геттер и сеттер 
      order: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          method: 'Домашний',
          business: 'Рабочий',
          home: 'Домашний',

          gift: 'С подарочной упаковкой',
          sendGift: 'С подарочной упаковкой',
          dontSendGift: 'Без подарочной упаковки',
      },
      states: {
          AL: 'Alabama',
          AR: 'Arizona',
          CA: 'California',
          NV: 'Nevada',
      },
      cart: []
    },
    products: {},

    filters: {
      formatPrice: function (price)
      {
        if (!parseInt(price)) { return ""; }
        if (price > 99999)
        {
            let priceString = (price/100).toFixed(2);
            let priceArray = priceString.split("").reverse();
            let index = 3;
            while (priceArray.length > index + 3)
            {
                priceArray.slice(index + 3, 0, ",");
                index += 4;
            }
            return "$" + priceArray.reverse().join("");
        } else {
            return "$" + (price / 100).toFixed(2);
        }
      }
    },


    methods: {
        checkRating(n, myProduct) {
          return myProduct.rating - n >= 0;
        },
        addToCart(aProduct) {
          this.cart.push(aProduct.id);
        },
        showCheckout() {
          this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
          alert('Submitted');
        },
        canAddToCart(aProduct) {
          //return this.product.availableInventory > this.cartItemCount;
          return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
          let count = 0;
          for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === id) {
              count++;
            }
          }
          return count;
        }
    },

    computed: {
        cartItemCount() {
          return this.cart.length || '';
        },
        // Сортируем проукты по имени
        sortedProducts() {
          if (this.products.length > 0) {
            let productsArray = this.products.slice(0);
            console.log(productsArray);
            console.log(this.products);
            function compare(a, b) {
              if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1;
              if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1;
              return 0;
            }
            return productsArray.sort(compare);
          }

        }
    },

    // Подгружаем данные JSON 
    created: function () { 
      axios.get('./products.json')
        .then((response) => {
          this.products = response.data.products;
          console.log(this.products);
        });
    }
  });