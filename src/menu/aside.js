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
    title: '预约表',
    icon: 'folder-o',
    path: '/reserve'
  }
]
