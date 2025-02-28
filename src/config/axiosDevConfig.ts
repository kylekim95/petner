import axios from 'axios';
import PATH from '@/constants/path';
const DEV_SERVER_URL = import.meta.env.VITE_API_BASE_URL;
const devAPI = axios.create({
  baseURL: DEV_SERVER_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청시 처리 ----------
const onRequest = (config) => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    config.headers.Authorization = `bearer ${jwt}`;
  }
  return config;
};

const onErrorRequest = (error) => {
  return Promise.reject(error);
};

// 응답시 처리 ----------

// 공통 에러 처리---------
const onError = (status: number, message, errorDetail) => {
  const error = { status, message, errorDetail };
  throw error;
};
const handleAuthError = async (originalRequest) => {
  const hasToken = originalRequest.headers['Authorization'].split(' ').at(1);
  if (hasToken) {
    alert('사용자 정보가 만료되었습니다.홈으로 이동합니다.');
    // jwt를 지우고 홈으로 이동
    localStorage.removeItem('jwt');
    window.location.href = PATH.root;
  } else {
    alert('사용자 정보를 찾을 수 없습니다. 로그인 페이지로 이동합니다.');
    // jwt를 지우고 로그인 페이지로 이동
    localStorage.removeItem('jwt');
    window.location.href = PATH.login;
  }
};

const onResponse = (response) => response;

// TODO :Typescript 전환하기
const onErrorResponse = (error) => {
  if (axios.isAxiosError(error)) {
    const originalRequest = error.config;
    const { data: message, status: statusCode, statusText } = error.response;

    // TODO : 배포후 DEV 상태에서만 로깅되도록 변경
    console.log(
      `[API] ${originalRequest.method.toUpperCase()} ${url} | ERROR ${statusCode} ${statusText} | ${message}`,
    );

    switch (statusCode) {
      case 400: {
        onError(statusCode, '잘못된 요청입니다.', message);
        break;
      }
      case 401:
      case 403: {
        handleAuthError(originalRequest);
        break;
      }
      case 404: {
        onError(statusCode, '찾을 수 없는 페이지 입니다.', message);
        break;
      }
      case 500: {
        onError(statusCode, '서버 오류입니다.', message);
        break;
      }
      default: {
        onError(statusCode, '에러가 발생했습니다.', message);
      }
    }
  } else if (error && error.name === 'TimeoutError') {
    console.log(`[API] | Timeout ERROR ${error.toString()}`);
    onError(0, '요청시간이 초과되었습니다.', '');
  } else {
    console.log(`[API] | ERROR ${error.toString()}`);
    onError(0, '에러가 발생했습니다.', '');
  }
  return Promise.reject(error);
};

devAPI.interceptors.request.use(onRequest, onErrorRequest);
devAPI.interceptors.response.use(onResponse, onErrorResponse);
export default devAPI;
