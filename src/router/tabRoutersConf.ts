import {RouteConfigInfo} from '@/common/types/base/Router';

/**
 * @Author: akai
 * @Create: 2019-03-07 20:15
 * @Description: TODO
 */

const tabRoutersConf: RouteConfigInfo[] = [
  {
    path: '/home',
    name: 'home',
    component: 'Home',
    meta: { title: '主页', icon: 'home' },
  },
  {
    path: '',
    name: 'placeholder1',
    component: undefined,
    meta: { title: '', icon: ''},
  },
  {
    path: '/add',
    name: 'add',
    component: 'Add',
    meta: { title: '发布', icon: 'camera', footer: 'hidden' },
  },
  {
    path: '',
    name: 'placeholder2',
    component: undefined,
    meta: { title: '', icon: ''},
  },
  {
    path: '/user-center',
    name: 'userCenter',
    component: 'UserCenter',
    meta: { title: '我的', icon: 'user' },
  },
];

export { tabRoutersConf };
