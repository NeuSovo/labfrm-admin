import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      // 演示页面
      {
        path: 'page1',
        name: 'page1',
        meta: {
          title: '页面 1',
          auth: true
        },
        component: _import('demo/page1')
      },
      {
        path: 'page2',
        name: 'page2',
        meta: {
          title: '页面 2',
          auth: true
        },
        component: _import('demo/page2')
      },
      {
        path: 'page3',
        name: 'page3',
        meta: {
          title: '页面 3',
          auth: true
        },
        component: _import('demo/page3')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      },
      {
        path: 'lab',
        name: '实验室列表',
        component: _import('lab/lab'),
        meta: {
          title: '实验室列表',
          auth: true
        }
      },
      {
        path: 'lab/detail/:labid',
        name: '实验室介绍',
        component: _import('lab/labdetail'),
        meta: {
          title: '实验室介绍',
          auth: true
        }
      },
      {
        path: 'reserve/0',
        name: '待审核',
        component: _import('lab/reserve/reserve.vue'),
        meta: {
          title: '待审核',
          auth: true
        }
      },
      {
        path: 'reserve/1',
        name: '已通过',
        component: _import('lab/reserve/reserve.1.vue'),
        meta: {
          title: '已通过',
          auth: true
        }
      },
      {
        path: 'reserve/-1',
        name: '不通过',
        component: _import('lab/reserve/reserve.-1.vue'),
        meta: {
          title: '不通过',
          auth: true
        }
      },
      {
        path: 'reserve/detail/:recordid',
        name: '预约记录详情',
        component: _import('lab/reserve/reservedetail'),
        meta: {
          title: '预约记录详情记录',
          auth: true
        }
      },
      {
        path: 'user',
        name: '用户列表',
        component: _import('user/user'),
        meta: {
          title: '用户列表',
          auth: true
        }
      },
      {
        path: 'user/whitelist',
        name: '白名单列表',
        component: _import('user/whitelist'),
        meta: {
          title: '白名单列表',
          auth: true
        }
      },
      ,
      {
        path: 'user/stuinfo',
        name: 'stuinfo',
        component: _import('user/stu_info'),
        meta: {
          title: '学生信息',
          auth: true
        }
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
