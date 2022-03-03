import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/base64',
    name: 'Base64',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Base64',
        component: () => import('@/views/base64/index'),
        meta: { title: 'Base64加解密', icon: 'form' }
      }
    ]
  },
  {
    path: '/md5',
    name: 'MD5',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'MD5',
        component: () => import('@/views/md5/index'),
        meta: { title: 'MD5加密', icon: 'form' }
      }
    ]
  },
  {
    path: '/url',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Url',
        component: () => import('@/views/url/index'),
        meta: { title: 'Url编码', icon: 'form' }
      }
    ]
  },
  {
    path: '/json',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'JSON',
        component: () => import('@/views/json/index'),
        meta: { title: 'JsonEditor', icon: 'form' }
      }
    ]
  },
  {
    path: '/time',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Time',
        component: () => import('@/views/time/index'),
        meta: { title: '时间戳工具', icon: 'form' }
      }
    ]
  },
  {
    path: '/jwt',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'JWT',
        component: () => import('@/views/jwt/index'),
        meta: { title: 'JWT', icon: 'form' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://xhdoc.com',
        meta: { title: '个人博客', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
