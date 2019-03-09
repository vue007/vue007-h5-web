/**
 * @author: Akai
 * @date: 2019-03-06 14:38
 * @description:
 */
import {login} from '../../api/base';
import User from '../../common/types/User';
import { Getter, Module } from 'vuex'

export class BaseStateTree {
  showHeader: boolean = false;
}

const base: Module<any, any> = {
  namespaced: true,
  state: new BaseStateTree(),

  mutations: {
    set_isCollapse(state: any, flag: boolean) {
      state.isCollapse = flag;
    },
  },

  actions: {
    toggleSidebar({state, commit}: any) {
      commit('set_isCollapse', !state.isCollapse);
    },

    login({state, commit}: any, user: User) {
      return new Promise((resolve, reject) => {
        login(user).then(res => {
          resolve(res.data);
        }).catch(err => {
          console.log(err);
          reject(err);
        });
      });
    }
  },

  getters: {
    showHeader: (state, getters, rootState,) => { // TODO 如何通过解构的方式导入参数
      return rootState.route.meta.header !== 'hidden';
    }
  }
};
export default base