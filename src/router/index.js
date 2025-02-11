import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Robocon2023 from '../views/Robocon2023.vue'
import Robocon2024 from '../views/Robocon2024.vue'
import HomeGermany from '../views/HomeGermany.vue'
import Sponsor from '../views/Sponsor.vue'
import Archive from '../views/Archive.vue'
import Stream from '../views/Stream.vue'
import NotFound from '../views/NotFound.vue'
import Game from '../views/Game.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/2024',
    name: 'Robocon2024',
    component: Robocon2024
  }, {
    path: '/2023',
    name: 'Robocon2023',
    component: Robocon2023
  },
  {
    path: '/germany',
    name: 'Germany',
    component: HomeGermany
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/sponsor',
    name: 'Sponsor',
    component: Sponsor
  },
  {
    path: '/stream',
    name: 'Stream',
    component: Stream
  },
  {
    path: '/quiz',
    beforeEnter: () => {
      window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSfsxaOkNju6m7Tp3D3QcdVel8Ikp1U0GUdNZF1LQYtKltp0aw/viewform?usp=sf_link')
    }
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/cs',
    beforeEnter: () => {
      window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSc8PQLJdrNdrNVV-eBJ7DxqxLCbHZqSSV0zsshCrUK1BlMT6g/viewform')
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router
