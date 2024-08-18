<template>
        <div id="blog-navbar">
                <div class="container">
                        <div id="name" class="roboto light">
                                Krish<span class="bold">Patel</span>
                        </div>
                        <div id="home-button">
                                <router-link to="/" class="home-link">Home</router-link>
                        </div>
                </div>
        </div>
</template>

<script setup lang="ts">
// No additional setup required for this simple navbar
</script>

<style scoped lang="scss">
@import url('/assets/styles/utils.css');

#blog-navbar {
        z-index: 10;
        position: sticky;
        align-items: center;
        top: 0;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        transition: background-color 1s ease, backdrop-filter 1s ease;
        backdrop-filter: blur(10px);
        background-color: #e7e5dd;
        padding: 20px;
        box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
}

.container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;

        #name {
                font-size: 32px;
                font-weight: 300;
                cursor: default;

                .bold {
                        font-weight: 800;
                }
        }

        #home-button {
                .home-link {
                        font-size: 18px;
                        text-transform: uppercase;
                        color: #000;
                        text-decoration: none;
                        padding: 10px 20px;
                        border: 1px solid #000;
                        border-radius: 4px;
                        transition: all ease 300ms;

                        &:hover {
                                background-color: #000;
                                color: #fff;
                                transition: all ease 300ms;
                        }
                }
        }
}
</style>
