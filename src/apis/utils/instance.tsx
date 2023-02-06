import axios from "axios";
const BASE_URL = "https://dapi.kakao.com";

const authAPI = () => {
  const token = process.env.REACT_APP_KAKAO_KEY;
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `KakaoAK ${token}`,
    },
  });
};

export const authInstance = authAPI();
