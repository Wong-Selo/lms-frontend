import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//import module
import dummies from "./module/dummies/index";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dummies,
  },
});
