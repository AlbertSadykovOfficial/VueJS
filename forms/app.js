let webstore = new Vue({
					el: "#app",
					data: {
						showProduct: true,
						sitename: "Vue.js Pet Depot", // При этом в переменной webstore создается геттер и сеттер 
						product: {
								id: 1001,
								title: "Cat Food, 25lb bag",
								description : "A 25 pound bag of <em>irresisible</em>, organic goodness for your cat.", 
								price: 2000,
								image: "https://raw.githubusercontent.com/ErikCH/VuejsInActionCode/master/chapter-02/assets/images/product-fullsize.png",
								availableInventory: 5
						},
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
					filters: {
						formatPrice: function (price)
						{
							if (!parseInt(price)) { return ""; }
							if (price > 99999)
							{
									let priceString = (price/100).toFixed(2);
									let priceArray = priceString.split("").reverse();
									let index = 3;
									while	(priceArray.length > index + 3)
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
						addToCart: function () {
							this.cart.push( this.product.id );
						},
						showCheckout() {
							this.showProduct = this.showProduct ? false : true;
						},
						submitForm() {
								alert('Submitted');
						}
					},
					computed: {
							cartItemCount: function () {
								return this.cart.length || '';
							},
							canAddToCart: function () {
								return this.product.availableInventory > this.cartItemCount;
							}
					}
				});