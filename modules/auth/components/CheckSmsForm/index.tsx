import React, { Fragment } from 'react';
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
  phone: string | null | undefined;
  onSuccess: Function;
  type: string;
}

const CheckSmsForm: React.FC<IProp> = ({phone, onSuccess, type}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{code: ''}}
        onSubmit={(values, actions) => {
          const payload = {phone, type, code: values.code};
          axl(actions).post('api/token/check-sms', payload)
            .then((response) => {
              actions.resetForm();
              onSuccess(response.data.token);
            }).catch(() => {});
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, isValid, isSubmitting, status}) => (
          <Fragment>
            <Field component={FormInput}
                   name="code"
                   label="Код из СМС"
                   iconName="ios-medical"
                   keyboardType="numeric"
                   autoFocus
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
                Проверить код
              </Button>
            </View>
          </Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default CheckSmsForm;
