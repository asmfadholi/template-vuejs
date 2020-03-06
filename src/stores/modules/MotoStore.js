export default {
    namespaced: true,

    state: {
        dataState: {
            list: [],
            detail: null
        }
    },

    getters: {

    },

    mutations: {
        storeDetail(state, payload) {
            state.dataState.detail = payload
        },

        addData(state, payload) {
            state.dataState.list.push(payload)
        },

        storeData(state, payload) {
            state.dataState.list = payload
        }

    },

    actions: {
        getUserScore() {
            var p = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        { id: 1, name: 'Zaid', score: 100 },
                        { id: 2, name: 'John', score: 90 },
                        { id: 3, name: 'Budi', score: 59 }
                    ])
                }, 149)
            })

            return p
        },

        async getDataList({ dispatch, commit }, payload) {
            try {
                let res = await dispatch('getUserScore')
                commit('storeData', res)
            } catch (err) {
                throw err
            }
        }
    }

}