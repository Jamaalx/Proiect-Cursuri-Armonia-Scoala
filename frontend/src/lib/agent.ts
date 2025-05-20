import axios from "axios";
import { uiStore } from "../store/uiStore";

const sleep = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

const agent = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

agent.interceptors.request.use(config => {
  uiStore.getState().isBusy();
  return config;
});

agent.interceptors.response.use(async response => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  } finally {
    uiStore.getState().isIdle();
  }
});

export default agent;