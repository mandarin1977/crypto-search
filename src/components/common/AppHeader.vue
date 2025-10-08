<template>
    <header :class="{whiteC : scrolled}">
        <div class="inner">
            <h1>
                <router-link to="/">logo</router-link>
            </h1>
            <nav class="gnb">
                <ul class="mainmenu">
                    <li>
                        <router-link to="/about">
                            about
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact">
                            contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/page">
                            page
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false)

function handleScroll() {
    scrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>