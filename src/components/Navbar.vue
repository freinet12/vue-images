<template>
    <div class="ui inverted pointing  menu">
        <router-link
            class="item" 
            :to="{'/' : !isLoggedIn, '/gallery' : isLoggedIn}">
            <h4> VUE IMAGES </h4>
        </router-link>
        
        <div class="right menu">
            <div class="horizontal" v-if="isLoggedIn">
                <router-link
                    active-class="active"
                    to="/gallery" 
                    class="item">
                    Gallery
                </router-link>

                <router-link
                    active-class="active"
                    to="/upload" 
                    class="item">
                    Upload
                </router-link>
                <a class="ui item" @click="logout" >
                    Logout
                </a>
            </div>
            <a v-else class="ui item" @click="login" >
                Login
            </a>
            
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: 'Navbar',
        computed: mapGetters(['isLoggedIn']),
        methods: {
            ...mapActions(['login', 'logout'])
        }
    }
</script>

<style scoped>
    .horizontal{
        display: flex;
        flex-direction: row;
    }
    .menu{
        border-radius: 0!important;
    }
</style>