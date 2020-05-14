import { Alert } from 'react-native';

const handleError = (error: any) => {
  let errorMsg;

  if (error.response) {
    const {data} = error.response;
    let errors = [];
    if ('error' in data) {
      errors = [data.error];
    } else if ('errors' in data) {
      if (Array.isArray(data.errors)) {
        ({errors} = data);
      } else {
        Object.keys(data.errors).forEach((k) => {
          errors.push(data.errors[k]);
        });
      }
    }
    errorMsg = errors.length > 0 ? errors.length[0] : null;
  } else if (error.request) {
    errorMsg = 'С вашим подключением не все так просто. Пожалуйста, проверьте доступ к интернету';
  } else {
    console.log('... что-то пошло не так', error);
    errorMsg = error.toString();
  }

  Alert.alert(
    'Ошибка!',
    errorMsg,
    [
      {text: 'OK'},
    ],
    {cancelable: true},
  );
};

export default handleError;