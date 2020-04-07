<template>
    <div class="wrapper ui container">
        <input 
            type="file" 
            multiple 
            @change="uploadImages($event.target.files)"
            accept="image/*">
        <span>Drag & Drop</span>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "UploadForm",

    methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
    .wrapper{
        margin-top: 5rem;
        border: 2px dashed #000;
        border-radius: 10px;
        padding: 2rem;
        height: 30vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .wrapper input{
        width: 100%;
        height: 30vh;
        position: absolute;
        border-radius: 10px;
        opacity: 0;
    }

    .wrapper:hover{
        background-color: #eee;
        cursor: pointer;
    }

    span{
        font-size: 2em;
    }
</style>