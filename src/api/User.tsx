import axios from "axios";
import * as CONSTANT from "../constant/Constant";

export const login = async (username: string, password: string) => {
  return axios.post(CONSTANT.BASE_URL + 'user/login', { username, password });
}

export const signup = async (username: string, password: string) => {
    return axios.post(CONSTANT.BASE_URL + 'user/signup', { username, password });
  }

export const test = async () => {
    return axios.get(CONSTANT.BASE_URL + 'test');
}