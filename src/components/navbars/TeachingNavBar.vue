<template>
        <div id="navbar" ref="navbar">
                <div class="container">
                        <div id="name" class="roboto light">
                                <router-link to="/">Krish<span class="bold">Patel</span></router-link>
                        </div>
                        <div id="options">
                                <router-link to="/experience/teaching" class="option">Teaching</router-link>
                                <router-link to="/experience/research" class="option">Research</router-link>
                                <router-link to="/experience/professional" class="option">Professional</router-link>
                                <router-link to="/experience/other" class="option">Other</router-link>
                        </div>
                </div>
        </div>
</template>

<style scoped>
@import url('/assets/styles/utils.css');

.container {
        width: 97%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        user-select: none;

        #name {
                font-size: 28px;
                font-weight: 300;

                #lastName {
                        font-weight: 800;
                }
        }

        #options {
                display: flex;

                .option {
                        padding: 0 10px;
                        height: 45px;
                        text-transform: uppercase;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        font-weight: 800;

                        &:hover {
                                color: #555;
                        }
                }
        }

        @media (max-width: 716px) {
                flex-direction: column;
                align-items: center;

                #options {
                        margin-top: 15px;
                }
        }
}

#navbar {
        z-index: 10;
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
}
</style>
