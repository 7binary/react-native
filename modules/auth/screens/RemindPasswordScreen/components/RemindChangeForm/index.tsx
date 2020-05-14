import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Field, Formik } from 'formik';
import { Button } from 'react-native-paper';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';

import styles from './styles';
import validationSchema from './validationSchema';

export interface IProp {
  phone: string;
  token: string;
  onSuccess: Function;
}

const RemindChangeForm: React.FC<IProp> = ({phone, token, onSuccess}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{password: '', passwordConfirm: ''}}
        onSubmit={(values, actions) => {
          const {password, passwordConfirm} = values;
          const payload = {phone, token, password, passwordConfirm};
          axl(actions).post('api/remind', payload)
            .then(() => {
              actions.resetForm();
              onSuccess();
            }).catch(() => {});
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, isValid, isSubmitting, status}) => (
          <>
            <Field component={FormInput}
                   name="password"
                   label="Пароль"
                   iconName="ios-lock"
                   secureTextEntry
                   autoFocus
            />
            <Field component={FormInput}
                   name="passwordConfirm"
                   label="Повтор пароля"
                   iconName="ios-lock"
                   secureTextEntry
            />
            <ErrorMessage dot>{status}</ErrorMessage>
            <View>
              <Button mode="contained"
                      onPress={handleSubmit}
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}>
                Сохранить
              </Button>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default RemindChangeForm;
