import axios from 'axios';
import { store } from 'src/rootStore';

export const HOST_API = process.env.REACT_APP_API_HOST;

export const postService = async (
  url: string,
  body: any,
  authentication = true
) => {
  try {
    const token = store.getState().auth.token;
    const headers = {
      Accept: 'application/json ',
      'Content-Type': 'application/json',
      ...(token && authentication ? { 'x-auth-token': token } : {}),
    };
    axios.defaults.withCredentials = true;

    const response = await axios.post(
      `${HOST_API + url}`,
      JSON.stringify(body),
      { headers }
    );
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error: any) {
    if (error.response) {
      const res = error.response.data.message;
      throw res;
    } else {
      throw error;
    }
  }
};
export const getService = async (url: string, params?: any) => {
  try {
    const token = store.getState().auth.token;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { 'x-auth-token': token } : {}),
    };

    let queryString = '';
    if (params) {
      queryString = `?${Object.keys(params)
        .map((key) => `${key}=${params[key] || ''}`)
        .join('&')}`;
    }
    const response = await axios.get(`${HOST_API}${url}${queryString}`, {
      headers,
      withCredentials: true,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error: any) {
    if (error.response) {
      const res = error.response.data.message;
      throw res;
    } else {
      throw error;
    }
  }
};
export const putService = async (url: string, body: any) => {
  try {
    const token = store.getState().auth.token;

    const headers = {
      Accept: 'application/json ',
      'Content-Type': 'application/json',
      ...(token ? { 'x-auth-token': token } : {}),
    };

    const response = await axios.put(
      `${HOST_API + url}`,
      JSON.stringify(body),
      {
        headers: headers,
        withCredentials: true,
      }
    );

    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(':');
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
export const deleteService = async (url: string, body: any) => {
  try {
    const token = store.getState().auth.token;

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { 'x-auth-token': token } : {}),
    };

    const response = await axios.delete(`${HOST_API + url}`, {
      headers: headers,
      withCredentials: true,
    });
    if (response.status >= 200 && response.status <= 210) {
      return response.data;
    }
  } catch (error: any) {
    if (error.response) {
      const errorMessage = error.response.data.error.split(':');
      const res = {
        status: error.response.status,
        errorMessage: errorMessage[errorMessage.length - 1],
        data: error.response.data,
      };
      throw res;
    } else {
      throw error;
    }
  }
};
