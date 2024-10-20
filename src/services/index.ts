import axios from 'axios';
import {AuthResponse} from '../entities/Auth';
import {OrderInfo} from '../entities/Order';

export const api = axios.create({
  baseURL: 'https://esimbackend-78d0b12a97f7.herokuapp.com/api',
  headers: {'Content-Type': 'application/json'},
});

function login(): Promise<AuthResponse> {
  return api.post('/user/login', {
    email: 'suumiizxc@gmail.com',
    password: 'test123',
  });
}

function getOrderInfo(token: string, orderId: string): Promise<OrderInfo> {
  return api.get(`/roamwifi/get-order-information`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
    params: {
      orderNum: orderId,
    },
  });
}

export const service = {
  login,
  getOrderInfo,
};
