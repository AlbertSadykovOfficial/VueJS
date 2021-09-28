<template>
		<div class="hello">
				{{ msg }}
		</div>
</template>

<script>
		export default {
				name: 'hello',
				data() {
						return {
								msg: 'Welcome to Vue.js App'
						}
				}
		}
</script>

<!-- scoped - ограничивает область видимости стилей текущим копонентом -->
<style scoped> 
</style>