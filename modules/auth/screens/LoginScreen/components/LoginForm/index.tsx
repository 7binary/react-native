import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';
import constants from 'assets/styles/constants';

import styles from './styles';
import { userLogin } from 'modules/auth/store/actions';

export interface IProps {
  onLogged?: Function;
}

const LoginForm: React.FC<IProps> = ({onLogged}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{login: '', password: ''}}
        onSubmit={(values, actions) => {
          axl(actions).post('api/login', values)
            .then((response) => {
              dispatch(userLogin(response.data));
              actions.resetForm();
              if (onLogged) {
                onLogged();
              }
            }).catch(() => {});
        }}>
        {({handleSubmit, isValid, isSubmitting, status}) => (
          <>
            <Field
              component={FormInput}
              name="login"
              label="Номер телефона"
              iconName="ios-call"
              phone
            />
            <Field
              component={FormInput}
              name="password"
              label="Пароль"
              iconName="ios-lock"
              secureTextEntry
            />
            <ErrorMessage dot>{status}</ErrorMessage>
            <View>
              <Button
                mode="contained"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                color={constants.buttonColor}
              >
                Войти
              </Button>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginForm;
