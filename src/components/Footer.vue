<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    if (
        !(
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0
        )
    )
        document.getElementById('links')?.classList.add('hover-enabled');
});
</script>

<template>
    <div id="footer">
        <div id="ownership">
            <strong>©2024</strong> Designed by Krish Patel
        </div>
        <div id="links">
            <a
                class="link"
                target="_blank"
                href="https://github.com/KrishPatel13/"
            >
                <div>
                    <i class="fa-brands fa-github"></i>
                    <div class="text">github.com/krishpatel13</div>
                </div>
            </a>
            <a
                class="link"
                target="_blank"
                href="mailto:kmp.patel@utoronto.ca"
            >
                <div>
                    <i class="fas fa-envelope"></i>
                    <div class="text">kmp.patel@utoronto.ca</div>
                </div>
            </a>
            <a
                class="link"
                target="_blank"
                href="https://www.linkedin.com/in/krishpatel13/"
            >
                <div>
                    <i class="fa-brands fa-linkedin"></i>
                    <div class="text">linkedin.com/in/krishpatel13</div>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('/assets/icons/css/fontawesome.min.css');
@import url('/assets/icons/css/brands.min.css');
@import url('/assets/icons/css/solid.min.css');

#footer {
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 716px) {
        flex-direction: column;
        align-items: center;
    }
}

#ownership {
    font-size: 16px;
}

#links {
    display: flex;
    cursor: pointer;

    .link {
        color: inherit;
        text-decoration: inherit;

        i {
            font-size: 30px;
            margin: 5px;
        }
        &:after,
        .text {
            transition: all 350ms ease-in-out;
            width: 0;
            max-width: 0;
            white-space: nowrap;
            overflow: hidden;
        }

        &:after {
            border: 1px solid rgba(#000, 0);
            content: '';
            display: block;
            position: relative;
        }

        & > div {
            display: flex;
            align-items: center;
        }
    }
}

#links.hover-enabled .link:hover {
    &:after,
    .text {
        border-color: #000;
        width: 100%;
        max-width: 300px;
    }
}
</style>
