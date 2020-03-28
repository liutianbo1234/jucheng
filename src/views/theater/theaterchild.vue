<template>
	<div class="number">
		<div @click="tiao1" class="mao">问问对方</div>
		<div @click="tiao2" style="color: #007AFF;">老旧</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				name: {
					id: 1,
					shu: 'shanghai'
				}

			}
		},
		beforeCreate() {
			this.shu = 'online'
		},
		beforeMount() {
			this.name.shu = 'LINE'
		},
		mounted() {
			this.name.shu = 'inline'

		},

		watch: {
			'name.shu': {
				handler(newvalue) {
					console.log('statue indate:' + newvalue)
					if (newvalue === "inline") {
						console.log(1111)
					}
				},
				deep: true,
				immediate: true,

			}
		},
		methods: {
			tiao1() {
				this.$router.go(-1)
				
			},
			tiao2() {
				this.$router.replace({
						 path:"/child"
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.number {
		color: red;
	}
</style>
