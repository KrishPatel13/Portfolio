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
            <div id="name" class="roboto light">
                Krish<span class="bold">Patel</span>
            </div>
            <div id="options">
                <div
                    v-for="(option, idx) in options"
                    :class="{ active: option.name === active.name }"
                    @click="onNavClick(option)"
                    :key="idx"
                >
                    {{ option.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/styles/utils.css');
.container {
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
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

        div {
            @media (min-width: 400px) {
                font-size: 18px;
            }
            padding: 0 10px;
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
                display: block;
                position: relative;
                transition: all 280ms ease-in-out;
                width: 0;
            }

            &:hover,
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
    &:after {
        content: '';
        position: relative;
        transition: all 250ms ease-in-out;
        width: 0;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
    }

    &.scrolled {
        &:after {
            box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.1);
        }
    }
}

#options.hover-enabled div:hover {
    &:before,
    &:after {
        border-color: #ccc;
    }
}
</style>
