import Axios from 'axios';
import { accessToken } from 'redux/store';
import { totp } from './totp';
import CryptoJS from 'crypto-js';
import { encryptionManager } from "./EncryptionManager/index";

const axios = Axios.create({
  withCredentials: true,
});


const otp = () => totp().generate();

const encrypted = () => CryptoJS.AES.encrypt(otp(), process.env.NEXT_PUBLIC_REF_ENCRYPTION_KEY);

axios.interceptors.request.use(function (config) {

  const authType = config?.data?.authType;

  config.headers = {
    'Content-Type': 'application/json',
    ...(authType !== "login" ? { 'Authorization': accessToken() || "" } : {}),
    'csrf-token': encrypted()
  };

  const data = encryptionManager.encrypt({ ...config.data });

  config.data = { ...data, authType };

  return config;

});

export default axios;
