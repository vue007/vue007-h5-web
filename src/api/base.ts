import fetch from '../common/fetch';
import User from '@/types/User';

export function login(user: User) {
  return fetch({
    url: '/login',
    method: 'post',
    data: user
  });
}