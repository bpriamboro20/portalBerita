import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CategoryView from '../views/CategoryView.vue'
import NewsView from '../views/NewsView.vue'
import ProfileView from '../views/ProfileView.vue'
import DetailCategoryView from '../views/DetailCategoryView.vue'
import LandingPage from '../views/LandingPage.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'

// News
import CreateNewsViews from '@/views/news/CreateNewsViews.vue'
import DetailNews from '@/views/news/DetailNewsView.vue'
import UpdateNewsView from '@/views/news/UpdateNewsView.vue'
import DetailNewsPublic from '@/views/public/news/DetailNewsPublic.vue'

// Public
import PublicLayout from '../layout/PublicLayout.vue'
import CategoryPublicView from '../views/public/CategoryPublicView.vue'
import LoginView from '../views/public/LoginView.vue'
import RegisterView from '../views/public/RegisterView.vue'
import CategoryByIdView from '@/views/public/category/CategoryByIdView.vue'

// Error
import NotFoundView from '../views/error/NotFoundView.vue'
import { auth } from '@/config/firebase'

// const login = true

const requiredAuth = (to, from, next) => {
  const userAuth = auth.currentUser
  if (!userAuth) {
    alert('Login/register terlebih dahulu ya')
    next({
      name: 'Login'
    })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //dashboard
    {
      path: '',
      redirect: { name: 'Dashboard' }
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      beforeEnter: requiredAuth,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: DashboardView
        },
        {
          path: 'category',
          name: 'Category',
          component: CategoryView
        },
        {
          path: 'news',
          name: 'News',
          component: NewsView
        },
        {
          path: 'news/create',
          name: 'CreateNews',
          component: CreateNewsViews
        },
        {
          path: 'news/:id',
          name: 'DetailNews',
          component: DetailNews
        },
        {
          path: 'news/:id/edit',
          name: 'DetailUpdate',
          component: UpdateNewsView
        },
        {
          path: 'user-profile',
          name: 'UserProfile',
          component: ProfileView
        },
        {
          path: 'category/:name',
          name: 'Category-name',
          component: DetailCategoryView
        }
      ]
    },

    //Public
    {
      path: '/',
      component: PublicLayout,
      children: [
        {
          path: '/landingpage',
          name: 'LandingPage',
          component: LandingPage
        },
        {
          path: '/news/:id',
          name: 'DetailNewsPublic',
          component: DetailNewsPublic
        },
        {
          path: '/category-public',
          name: 'Category-public',
          component: CategoryPublicView
        },
        {
          path: '/category-public/:id',
          name: 'CategoryByIdView',
          component: CategoryByIdView
        },
        {
          path: '/register',
          name: 'Register',
          component: RegisterView
        },
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFoundView
        }
      ]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
