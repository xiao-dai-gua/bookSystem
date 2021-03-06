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
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },


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
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  {
    path: '/testpage',
    component: Layout,
    redirect: '/testpage/testindex',
    name: 'TestaPage',
    meta: { title: '????????????', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'testindex',
        name: 'TestlIndex',
        component: () => import('@/views/test_page/test'),
        meta: { title: '????????????1', icon: 'table' }
      },
      {
        path: 'testtwo',
        name: 'TestlTwo',
        component: () => import('@/views/test_page/test1'),
        meta: { title: '????????????2', icon: 'table' }
      },
    ]
  },
  {
    path:"/administrators",
    component:Layout,
    redirect:'/administrators/list',
    name:'book',
    meta:{title:'???????????????',icon:'el-icon-s-help'},
    children:[
      {
        path:'list',
        name:'Lsit',
        component:()=>import('@/views/administrators/list'),
        meta:{title:'???????????????',icon:'table'}
      },
      {
        path:'add',
        name:'Add',
        component:()=>import('@/views/administrators/add'),
        meta:{title:'???????????????',icon:'table'}
      }
    ]
  },
  {
    path:"/address",
    component:Layout,
    redirect:'/address/add_address',
    name:'address',
    meta:{title:'???????????????',icon:'el-icon-s-help'},
    children:[
      {
        path:'list_address',
        name:'list_address',
        component:()=>import('@/views/address/list_address'),
        meta:{title:'???????????????',icon:'table'}
      },
      {
        path:'add_address',
        name:'add_address',
        component:()=>import('@/views/address/add_address'),
        meta:{title:'???????????????',icon:'table'}
      }
    ]
  },
  {
    path:"/message",
    component:Layout,
    redirect:'/message/add',
    name:'message',
    meta:{title:'????????????',icon:'el-icon-s-help'},
    children:[
      {
        path:'add',
        name:'add',
        component:()=>import('@/views/message/add.vue'),
        meta:{title:'????????????',icon:'table'}
      },
      {
        path:'list',
        name:'list',
        component:()=>import('@/views/message/list.vue'),
        meta:{title:'????????????',icon:'table'}
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
