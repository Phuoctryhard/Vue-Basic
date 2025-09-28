// import App from '@/App.vue'
// import { createRouter, createWebHistory } from 'vue-router'


// const routes = [
//   { path: '/', component: App },

// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

import App from '@/App.vue'
import JobListing from '@/components/JobListing.vue'
import AddJobView from '@/view/AddJobView.vue'
import EditJobView from '@/view/EditJobView.vue'
import HomeView from '@/view/HomeView.vue'
import JobsView from '@/view/JobsView.vue'
import JobView from '@/view/JobView.vue'
import NotFoundView from '@/view/NotFoundView.vue'
import { comma } from 'postcss/lib/list'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/jobs/:id',component:JobView
  },
  { path: '/', component: HomeView },
  { path: '/jobs', component:JobsView },
  {
    path:'/jobs/add',
    component:AddJobView
  },
   {
    path:'/jobs/edit/:id',
    component:EditJobView
  },
  { path :'/:catchAll(.*)',component:NotFoundView
  
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
