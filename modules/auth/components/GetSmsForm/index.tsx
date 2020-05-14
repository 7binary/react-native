import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Field, Formik } from 'formik';
import { Button } from 'react-native-paper';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';
import constants from 'assets/styles/constants';

import styles from './styles';
import validationSchema from './validationSchema';

export interface IProp {
  onSuccess: Function;
  type: string;
}

const GetSmsForm: React.FC<IProp> = ({onSuccess, type}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{phone: ''}}
        onSubmit={(values, actions) => {
          const payload = {phone: values.phone, type};
          axl(actions).post('api/token/get-sms', payload)
            .then(() => {
              actions.resetForm();
              onSuccess(values.phone);
            }).catch(() => {});
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, isValid, isSubmitting, status}) => (
          <>
            <Field
              component={FormInput}
              name="phone"
              label="Номер телефона"
              placeholder="+7 ("
              iconName="ios-call"
              autoFocus
              phone
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
                Отправить код
              </Button>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default GetSmsForm;
