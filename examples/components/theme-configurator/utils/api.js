import Element from 'main/index.js';
import { post, get } from './ajax';

const { version } = Element;

const hostList = {
  local: 'http://localhost:3008/',
  alpha: 'https://ssr.alpha.elenet.me/element-theme-server/',
  production: 'https://ssr.elenet.me/element-theme-server/'
};

const host = hostList[process.env.FAAS_ENV] || hostList.production;

export const getVars = () => get(`${host}getVariable?version=${version}`);

export const updateVars = (data, cb) => post(`${host}updateVariable?version=${version}`, data, cb);
