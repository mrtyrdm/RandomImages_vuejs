const loadingGif2 = 'image/loading.gif'; 

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://hilongjw.github.io/vue-lazyload/dist/404.png',
  loading: loadingGif2,
  attempt: 1
})

var example2 = new Vue({
	el: '#app',
	data: { 
	  RamdomImages: "https://source.unsplash.com/random?",
	  items: 20
	},
	methods: {
		  fullImages: function(item) {
			  return this.RamdomImages + item;
		  },
	  }
  })