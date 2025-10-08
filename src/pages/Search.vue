<template>
    <section class="searchPage">
        <article>
            <h3>
                검색결과
            </h3>
        </article>
      <form @submit.prevent="submit">
        <div class="searchbar">
            <input
                v-model="q"
                type="search"
                placeholder="ex) bitcoin, ethereum..."
            />
            <button type="submit">검색</button>
        </div>

      </form>
  
      <div class="state" v-if="loading">불러오는 중...</div>
      <div class="state error" v-else-if="error">{{ error }}</div>
  
      <div class="card" v-else-if="coin">
        <img :src="coin.image" :alt="coin.name" width="64" height="64" />
        <h2>{{ coin.name }} ({{ coin.symbol.toUpperCase() }})</h2>
        <p class="price">$ {{ coin.current_price.toLocaleString() }}</p>
        <p
          class="change"
          :class="{ up: coin.price_change_percentage_24h > 0, down: coin.price_change_percentage_24h < 0 }"
        >
          {{ coin.price_change_percentage_24h?.toFixed(2) ?? 0 }}%
        </p>
  
        <ul class="meta">
          <li>24h High: $ {{ coin.high_24h?.toLocaleString() }}</li>
          <li>24h Low : $ {{ coin.low_24h?.toLocaleString() }}</li>
          <li>Market Cap: $ {{ coin.market_cap?.toLocaleString() }}</li>
        </ul>
      </div>
  
      <div v-else class="state">검색 결과가 없습니다.</div>
    </section>
  </template>
<script setup>
import '@/styles/search.css';
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const router = useRouter()

const q = ref(route.query.q?.toString() || '')
const loading = ref(false)

const error = ref(false)
const coin = ref(null)

async function fetchCoin(id){
    loading.value = true
    error.value = ''
    coin.value = null

    try{
        const {data} = await axios.get(
            'https://api.coingecko.com/api/v3/coins/markets',
            {params: {vs_currency: 'usd', ids: id}}
        )
        if (data && data.length) coin.value = data[0]
        else error.value = '존재하지 않은 코인입니다.'
    } catch (e) {
        error.value = '실패'
        console.error(e)
    } finally {
        loading.value = false
    }
}

function submit() {
    const id = q.value.trim().toLowerCase()
    if (!id) return
    router.replace({name : 'search', query : {q: id}})
    fetchCoin(id)
}

onMounted(() => {
    if (q.value) fetchCoin(q.value.toLowerCase())
})

watch(() => route.query.q, (val) => {
    q.value = (val || '').toString()
    if (q.value) fetchCoin(q.value.toLowerCase())
})
</script>