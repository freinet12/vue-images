<template>
    <div class="img-container">
        <img
            v-for="image in allImages"
            :key="image.id"
            :src="image.link" 
            alt="image.name"
        >
    </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex';
    export default {
        name: "ImageGallery",

        computed: mapGetters(['allImages']),

        created() {
            this.getImages();
        },

        methods: mapActions(['getImages'])
    }
</script>

<style scoped>
    
    .img-container{
        margin: 1rem;
        column-count: 3;
        column-gap: .5rem; 
    }

    img{
        max-width: 100%;
        padding: 0;
    }


</style>