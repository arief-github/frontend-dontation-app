import Api from "@/api/Api";

const category = {
    namespaced: true,
    state: {
        categories: [],
        category: {}
    },
    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data
        },
        SET_DETAIL_CATEGORY(state, data) {
            state.category = data
        }
    },
    actions: {
        getCategoryHome({ commit }) {
            // get Data Category Home
            Api.get('/category-home')
                .then((response) => {
                    commit('SET_CATEGORIES', response.data.data)
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        getCategory({ commit }) {
            Api.get('/categories')
                .then((response) => {
                    commit('SET_CATEGORIES', response.data.data.data);
                })
                .catch((error) => console.error(error))
        },
        getDetailCategory({ commit }, slug) {
            // get single data category
            Api.get(`category/${slug}`)
                .then((response) => {

                    // commit ke mutation SET_DETAIL_CATEGORY
                    commit('SET_DETAIL_CATEGORY', response.data.data)
                })
                .catch((error) => {
                    // tampilkan error log dari response
                    console.error(error)
                })
        }
    },
    getters: {},
};

export default category;