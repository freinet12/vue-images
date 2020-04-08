<template>
    <div class="home ui">
        <div class="inner">
            <h1>
                Vue Images
            </h1>
            <h5>Login To Get Started.</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

    .inner{
        left: 30%;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    h1{
        font-size: 10em;
        color: #ccc;
    }

    h5{
        text-align: center;
        font-size: 2em;
        font-style: italic;
        color: #4d4d4d;
    }
</style>