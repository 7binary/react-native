import React from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik } from 'formik';
import { Button } from 'react-native-paper';

import FormInput from 'components/form/FormInput';
import ErrorMessage from 'components/form/ErrorMessage';
import axl from 'utils/axl';
import { setUser } from 'modules/profile/store/actions';
import { RootState } from 'store/rootReducer';

import styles from './styles';
import validationSchema from './validationSchema';
import { User } from 'modules/profile/store/types';
import constants from '../../../../../../assets/styles/constants';

export interface IProp {
  onSuccess?: Function;
}

const ProfileForm: React.FC<IProp> = ({onSuccess}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.profile.user);
  if (!user) {
    return null;
  }
  const profile_id = user.profile_id;

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={{
          last_name: user.last_name,
          first_name: user.first_name,
          middle_name: user.middle_name,
          email: user.email,
        }}
        onSubmit={(values, actions) => {
          const payload: User = {profile_id, ...values};
          axl(actions).post('profiles/api/auth/profile-edit', payload)
            .then((response) => {
              dispatch(setUser(response.data.profile));
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
                   name="email"
                   label="E-mail адрес"
                   iconName="ios-mail"
            />
            <ErrorMessage dot>{status}</ErrorMessage>
            <View style={styles.buttonContainer}>
              <Button mode="contained"
                      onPress={handleSubmit}
                      disabled={!isValid || isSubmitting}
                      loading={isSubmitting}
                      color={constants.buttonColor}
              >
                Сохранить
              </Button>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ProfileForm;
