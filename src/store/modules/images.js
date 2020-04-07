import api from '../../api/imgur';
import router from '../../router';

const state = {
    images: []

};

const getters = {
    allImages: state => state.images
};

const actions = {
    async getImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.getImages(token);
        commit('setImages', response.data.data);

    },

    async uploadImages({ rootState}, images){
        const { token } = rootState.auth;
        
        if (images.length > 0){
            await api.uploadImages(images, token);
            router.push('/gallery');
        }
        
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};