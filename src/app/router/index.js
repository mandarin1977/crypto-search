import { createRouter, createWebHistory } from 'vue-router'

// 페이지
import HomePage from '@/pages/HomePage.vue'
import Aboutpage from '@/pages/Aboutpage.vue'
import Contactpage from '@/pages/Contactpage.vue'
import Page01 from '@/pages/Page01.vue'
//css
import '@/styles/base.css'
import Search from '@/pages/Search.vue'

// 필요하면 public/private 라우트로 쪼개도 되지만,
// 일단 동작 확인을 위해 한 파일에 모으자.
const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { layout: 'default' } },
  { path: '/about', name: 'about', component: Aboutpage, meta: { layout: 'default' } },
  { path: '/page', name: 'page', component: Page01, meta: { layout: 'default' } },
  { path: '/contact', name: 'contact', component: Contactpage, meta: { layout: 'default' } },
  { path: '/search', name: 'search', component: Search, meta: { layout: 'default' } },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundpage.vue'),
    meta: { layout: 'default' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
