<template>
    <div class="img-container">
        <div class="no-images" v-if="allImages.length === 0">
            <h5>You have no images.</h5>
        </div>
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

    .no-images{
        left: 34%;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    h5{
        font-size: 5em;
        color: #4d4d4d;
    }

</style>