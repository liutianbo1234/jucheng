import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		swiper3: [],
		chengdu: [],
		comming: [],
		detail: [],
		theater: [],
		searchDate:[]

	},
	mutations: {
		swiper(state, list) {
			state.swiper3 = list
		},
		chengdu(state, list1) {
			state.chengdu = list1
		},
		Listdetail(state, list2) {
			state.detail = list2
		},
		Theater(state, list3) {
			state.theater = list3
		},
		search(state,list4){
			state.searchDate = list4
		}

	},
	getters: {
		comminglist(state) {
			return state.comming.push(state.chengdu.list);
			// return com.push(state.chengdu.list)
		}
	},
	actions: {
		async send(store) {
			const {
				data
			} = await axios.get(`https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.1.1&referer=2`)
			console.log(data.data)
			store.commit("swiper", data.data)
			
		},
		async city({
			commit
		}, a) {
			const {
				data
			} = await axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=` + a +
				`&category=&keywords=&venue_id=&start_time=&page=2&referer_type=index&version=6.1.1&referer=2`)
			commit("chengdu", data.data)
		},
		async theater(store) {
			const {
				data
			} = await axios.get(`https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=1`)
			store.commit("Theater", data.data.theatre_list)
			
		},
		async delishshow({
			commit
		}, bid) {
			const {
				data
			} = await axios.get(
				`https://api.juooo.com/Schedule/Schedule/getScheduleInfo?schedular_id=${bid}&version=6.1.1&referer=2`)
		
			commit("Listdetail", data.data)

		},
		
		async inputsearch({commit},font){
			 var fontDa = encodeURI(font)
			const {data} = await axios.get(`https://api.juooo.com/Show/Search/getShowList?city_id=&category=&keywords=${fontDa}&venue_id=&start_time=&page=1&referer_type=&version=6.1.1&referer=1`)
			
			 await commit("search", data.data)
		}
		
	},
	modules: {

	}
})
