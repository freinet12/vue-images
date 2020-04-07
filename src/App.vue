<template>
    <div class="main-wrapper">
        <header>
            <Navbar />
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

import Navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
    
</style>