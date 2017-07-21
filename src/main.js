import Vue from 'vue'
import App from './App.vue'

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  data: {
      name: '',
      image_url: '',
      cards: [],
      shuffled_cards: [],
      draw_lists: [],
      msg: ''
  },
})
