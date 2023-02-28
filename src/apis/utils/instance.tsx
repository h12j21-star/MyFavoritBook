import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const BASE_URL = "https://dapi.kakao.com";

const authAPI = () => {
  const token = process.env.REACT_APP_KAKAO_KEY;
  console.log("dd" + token);
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `KakaoAK ${token}`,
    },
  });
};

export const authInstance = authAPI();
