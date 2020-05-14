import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik } from 'formik';
import { Button } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';
import { RootState } from 'store/rootReducer';

import styles from './styles';
import validationSchema from './validationSchema';
import { User } from 'modules/profile/store/types';
import constants from 'assets/styles/constants';
import UploadFile from 'types/UploadFile';
import FileInput from 'components/form/FileInput';

export interface IProp {
  onSuccess?: Function;
}

const PassportForm: React.FC<IProp> = ({onSuccess}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user);
  const passport = useSelector((state: RootState) => state.profile.passport);
  if (!user) {
    return null;
  }
  const profile_id = user.profile_id;

  const [document1, setDocument1] = useState<UploadFile|null>(null);
  const [document2, setDocument2] = useState<UploadFile|null>(null);

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          last_name: passport ? passport.last_name : user.last_name,
          first_name: passport ? passport.first_name : user.first_name,
          middle_name: passport ? passport.middle_name : user.middle_name,
          birthday_on_local: passport ? passport.birthday_on_local : user.birthday_on,
          document_series_and_number: passport ? passport.document_series_and_number : '',
        }}
        onSubmit={(values, actions) => {
          const payload: User = {profile_id, ...values};
          axl(actions).post('taxes/api/ndfl/save-passport', payload)
            .then(() => {
              if (typeof onSuccess === 'function') {
                onSuccess();
              }
            }).catch(() => {});
        }}
        validationSchema={validationSchema}>
        {({handleSubmit, isValid, isSubmitting, status}) => (
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
                   name="birthday_on_local"
                   label="Дата рождения (дд.мм.гггг)"
                   iconName="ios-calendar"
                   mask="99.99.9999"
            />
            <Field component={FormInput}
                   name="document_series_and_number"
                   label="Серия и номер паспорта"
                   iconName="md-card"
                   mask="9999 999999"
            />
            <Field component={FormInput}
                   name="address"
                   label="Адрес места жительства в РФ"
                   iconName="md-card"
            />
            <Field component={FormInput}
                   name="inn"
                   label="ИНН"
                   iconName="md-card"
                   mask="999999999999"
            />

            <FileInput title="Разворот паспорта" file={document1} setFile={file => setDocument1(file)}/>
            <FileInput title="Страница регистрации" file={document2} setFile={file => setDocument2(file)}/>

            <ErrorMessage dot>{status}</ErrorMessage>
            <View style={styles.buttonContainer}>
              <Button mode="contained"
                      onPress={handleSubmit}
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                      color={constants.buttonColor}
              >
                Отправить на проверку
              </Button>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default PassportForm;
