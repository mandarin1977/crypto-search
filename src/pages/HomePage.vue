<template>
    <section class="mainVisual">
        <form @submit.prevent="goSearch">
            <input type="search" 
                class="mainSearch"
                v-model="keyword"
                placeholder="ex)bitcoin"
                @keyup.enter="goSearch"
            >
        </form>
        <swiper-container class="mainSwiper"
        :slidesPerView="1"
        :loop="true">
            <swiper-slide>
                <article>
                    <h2>This is my homepage</h2>
                    <p>let's have a break!</p>
                </article>
                <img src="@/assets/images/mainBanner001.jpg" alt="slide">
            </swiper-slide>
            <swiper-slide>
                <article>
                    <h2>This is my homepage</h2>
                    <p>let's have a break!</p>
                </article>
                <img src="@/assets/images/mainBanner002.jpg" alt="slide">
            </swiper-slide>
            <swiper-slide>
                <article>
                    <h2>This is my homepage</h2>
                    <p>let's have a break!</p>
                </article>
                <img src="@/assets/images/mainBanner003.jpg" alt="slide">
            </swiper-slide>
        </swiper-container>
    </section>
    <section class="sct sct1">
        section01
    </section>
    <section class="sct sct2">
        section02
    </section>
    <section class="sct sct3">
        section03
    </section>
</template>
<script setup>
import '@/styles/main.css'
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()
const keyword = ref('')

function goSearch() {
    const q = keyword.value.trim().toLowerCase()
    if (!q) return
    router.push({ name: 'search', query: { q } })
}

</script>