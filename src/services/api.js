import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios';

axios.defaults.params = {
    language: "pt-BR",
    api_key: "a6e6381bba3f98f3d8d5d40dbe25d1a4"
}

axios.defaults.baseURL = "https://api.themoviedb.org/3";

Vue.use(
    VueAxios,axios
);

// install(Vue){
//     Vue.prototype.$http = axios;
// },

// https://api.themoviedb.org/3/movie/550?api_key=a16fec3182959f245e5479f51cace100