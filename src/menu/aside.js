// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '页面',
    icon: 'folder-o',
    children: [
      { path: '/page1', title: '页面 1' },
      { path: '/page2', title: '页面 2' },
      { path: '/page3', title: '页面 3' }
    ]
  },
  {
    title: '实验室',
    icon: 'folder-o',
    children: [
      { path: '/lab', title: '实验室列表' }
    ]
  },
  {
    title: '预约',
    icon: 'folder-o',
    children: [
      { path: '/reserve/0', title: '待审核' },
      { path: '/reserve/1', title: '已审核' },
      { path: '/reserve/-1', title: '不通过' }

    ]
  },
  {
    title: '用户',
    icon: 'folder-o',
    children: [
      { path: '/user', title: '用户列表' },
      { path: '/user/whitelist', title: '白名单列表' },
      { path: '/user/stuinfo', title: '学生信息' }
    ]
  }
]
