import React from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Field, Formik } from 'formik';
import { Button } from 'react-native-paper';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';
import Page from 'types/Page';
import { userLogin } from 'modules/auth/store/actions';

import styles from './styles';
import validationSchema from './validationSchema';
import PageCheckbox from '../PageCheckbox';

export interface IProp {
  phone: string | null | undefined;
  token: string;
  onSuccess: Function;
  pagePers: Page;
  pageRules: Page;
}

const RegisterForm: React.FC<IProp> = ({phone, token, onSuccess, pageRules, pagePers}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          last_name: '',
          first_name: '',
          middle_name: '',
          email: '',
          password: '',
          passwordConfirm: '',
          checkedRules: false,
          checkedPers: false,
        }}
        onSubmit={(values, actions) => {
          const payload = {...values, token, phone};
          axl(actions).post('profiles/api/register', payload)
            .then((response) => {
              dispatch(userLogin(response.data));
              actions.resetForm();
              onSuccess();
            }).catch(() => {});
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, isValid, isSubmitting, status, setFieldValue}) => (
          <>
            <Field component={FormInput}
                   name="last_name"
                   label="Фамилия"
                   iconName="ios-contact"
            />
            <Field component={FormInput}
                   name="first_name"
                   label="Имя"
                   iconName="ios-contact"
            />
            <Field component={FormInput}
                   name="middle_name"
                   label="Отчество"
                   iconName="ios-contact"
            />
            <Field component={FormInput}
                   name="email"
                   label="E-mail адрес"
                   iconName="ios-mail"
            />
            <Field component={FormInput}
                   name="password"
                   label="Пароль"
                   iconName="ios-lock"
                   secureTextEntry
            />
            <Field component={FormInput}
                   name="passwordConfirm"
                   label="Повтор пароля"
                   iconName="ios-lock"
                   secureTextEntry
            />
            <PageCheckbox accepted={() => setFieldValue('checkedRules', true)}
                          declined={() => setFieldValue('checkedRules', false)}
                          page={pageRules}
                          textIntro="Согласен с"
                          textLink="правилами акции"
            />
            <PageCheckbox accepted={() => setFieldValue('checkedPers', true)}
                          declined={() => setFieldValue('checkedPers', false)}
                          page={pagePers}
                          textIntro="Согласие на"
                          textLink="обработку персональных данных"
            />
            <ErrorMessage dot>{status}</ErrorMessage>
            <View style={styles.buttonContainer}>
              <Button mode="contained"
                      onPress={handleSubmit}
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}>
                Отправить
              </Button>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default RegisterForm;
