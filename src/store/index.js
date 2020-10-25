import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);
let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true,
});
export default new Vuex.Store({
  state: {
    profile: {},
    chores: [
      { id: "1", description: "description1", title: "dishes", reward: 1.25 },
      {
        id: "2",
        description: "description2",
        title: "sweep and mop",
        reward: 1.0,
      },
    ],
    helpers: [
      { name: "chris", chores: ["1", "2", "1", "2"] },
      { name: "dad", chores: ["1", "2", "1", "2"] },
    ],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
      console.log("profile set to " + state.profile);
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    setProfile(state, profile) {
      state.profile = profile;
      console.log("profile set to " + state.profile);
    },
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
  },
  modules: {},
});
