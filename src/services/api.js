import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios';

axios.defaults.params = {
    language: "pt-BR",
    api_key: "" //Coloque sua chave dentro das aspas
}

axios.defaults.baseURL = "https://api.themoviedb.org/3";

Vue.use(
    VueAxios,axios
);
