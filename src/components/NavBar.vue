<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted, onUnmounted } from 'vue';
type Section = {
    name: string;
    selectorId: string;
    element?: HTMLElement | null;
    location?: number;
};

const options: Section[] = [
    { name: 'me', selectorId: 'about' },
    { name: 'experience', selectorId: 'experience' },
    { name: 'portfolio', selectorId: 'portfolio' },
    { name: 'skills', selectorId: 'skills' },
];

const active = ref(options[0]);
const scrolled = ref(false);
const navbar = ref(null);

const updateElements = () => {
    for (const option of options) {
        option.element = document.getElementById(option.selectorId);
    }
};

const updateLocations = () => {
    const navHeight = (navbar as any).value.offsetHeight + 5;
    for (const option of options) {
        option.location =
            option.element!.getBoundingClientRect().top +
            window.scrollY -
            navHeight;
    }
};

const onNavClick = (option: Section) => {
    window.scrollTo({ top: option.location, behavior: 'smooth' });
};

const onScroll = () => {
    scrolled.value = window.scrollY > 0;
    for (let i = options.length - 1; i >= 0; i--) {
        if (window.scrollY >= options[i].location! - 1) {
            active.value = options[i];
            break;
        }
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    setTimeout(() => {
        updateElements();
        updateLocations();
    }, 200);

    if (
        !(
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0
        )
    )
        document.getElementById('options')?.classList.add('hover-enabled');
    window.addEventListener('resize', () => setTimeout(updateLocations, 0));
    window.addEventListener('scroll', onScroll);
});
onUnmounted(() => document.removeEventListener('scroll', onScroll));
</script>

<template>
    <div id="navbar" :class="{ scrolled }" ref="navbar">
        <div class="container">
            <div id="name" class="roboto light hover-enabled" @click="scrollToTop">
                Krish<span class="bold">Patel</span>
            </div>
            <div id="options">
                <div v-for="(option, idx) in options" :class="{ active: option.name === active.name }"
                    @click="onNavClick(option)" :key="idx">
                    {{ option.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
.container {
    width: 97%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    user-select: none;

    #name {
        margin-left: 50px;
        font-size: 32px;
        font-weight: 300;
        cursor: home;

        &:hover{
            transform: scale(1.2);
            transition: all ease 500ms;
            box-shadow: 0 0 5px #000;
            border: none;
            cursor: url('/assets/cursor/go-to-top.png'), auto;
        }

        #lastName {
            font-weight: 800;
        }
    }

    #options {
        display: flex;

        div {
            @media (min-width: 400px) {
                font-size: 18px;
            }
            margin: 0px 8px;
            padding: 0 2px;
            height: 45px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-transform: uppercase;
            display: flex;
            cursor: pointer;

            &:before,
            &:after {
                border: 1px solid rgba(#000, 0);
                content: '';
                display: flex;
                position: relative;
                transition: all 280ms ease-in-out;
                width: 0;
            }

            &:hover {
                transform: scale(1.1);
                transition: all ease 500ms;
                box-shadow: 0 0 5px #000;
                cursor: pointer;
            }
            &.active {
                &:before,
                &:after {
                    transition: width 350ms ease-in-out;
                    width: 100%;
                }
            }

            &.active {
                font-weight: 800;
                &:before,
                &:after {
                    border-color: #000;
                    width: calc(100% + 20px);
                }
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
    align-items: center;
    top: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    transition: background-color 1s ease, backdrop-filter 1s ease;
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8);

    &.scrolled {
        background-color: rgba(255, 255, 218, 0.8);
            &:after {
                box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
                width: 100vw;
            }
        }

    &:after {
        content: '';
        position: relative;
        transition: all 2000ms ease-in-out;
        width: 0;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }
}

@keyframes expandNavbar {
    0% {
        width: auto;
        max-width: 1080px;
        margin: 0 auto;
    }
    100% {
        width: 100vw;
        max-width: none;
        margin: 0;
    }
}

#options.hover-enabled div:hover {
    &:before,
    &:after {
        border-color: #ccc;
    }
}

</style>
