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
//서버에서 받은 응답의 타입을 정의해 주셔야 합니다. 예를 들어서 서버에서 문자열 배열을 응답으로 넘겨주었다 하면 AxiosPromise<string[]>가 됩니다 :)
