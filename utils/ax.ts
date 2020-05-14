import axios from 'axios';
import { baseURL, xToken } from '../env';
import { FormikHelpers } from 'formik';

const ax = (actions?: FormikHelpers<any>) => {
  const ax = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'X-Token': xToken,
    },
  });

  if (actions) {
    ax.interceptors.request.use(
      (config) => {
        actions.setStatus(null);
        return config;
      },
      (error) => Promise.reject(error),
    );
    ax.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        actions.setStatus(error);
        return Promise.reject(error);
      },
    );
  }

  return ax;
};

export default ax;