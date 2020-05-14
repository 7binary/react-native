import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import mainStyles from 'assets/styles/mainStyles';
import ResetPhone from 'modules/auth/components/ResetPhone';
import GetSmsForm from 'modules/auth/components/GetSmsForm';
import CheckSmsForm from 'modules/auth/components/CheckSmsForm';
import RegisterForm from './components/RegisterForm';
import ax from 'utils/ax';
import StatusBarLight from 'components/StatusBarLight';
import DropdownAlertService from 'services/DropdownAlertService';

type TypeString = string | null;

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState<TypeString>(null);
  const [token, setToken] = useState<TypeString>(null);
  const [pagePers, setPagePers] = useState({title: '', content: ''});
  const [pageRules, setPageRules] = useState({title: '', content: ''});
  const [profileInfo, setProfileInfo] = useState<any>(null);

  useEffect(() => {
    loadRegisterInfo();
  }, []);

  const getSmsSuccess = (phoneNumber: string) => {
    setPhone(phoneNumber);
  };

  const loadRegisterInfo = () =>
    ax().post('profiles/api/register/info', {phone})
      .then((response) => {
        const {pagePers, pageRules, profile} = response.data;
        setPagePers(pagePers);
        setPageRules(pageRules);
        if (profile) {
          setProfileInfo(profile);
        }
      });

  const checkSmsSuccess = (tokenForm: string) => {
    setToken(tokenForm);
    loadRegisterInfo();
  };

  const registerSuccess = () => {
    setPhone(null);
    setToken(null);
    navigation.navigate('Login');
    DropdownAlertService.alert('success', 'Вы успешно зарегистрированы в программе');
  };

  const resetPhonePressed = () => {
    setPhone(null);
    setToken(null);
  };

  return (
    <View style={{...mainStyles.screen, ...styles.container}}>
      <StatusBarLight/>
      {phone && !token && <ResetPhone phone={phone} onReset={resetPhonePressed}/>}
      {!phone && !token && <GetSmsForm onSuccess={getSmsSuccess} type="sms_noprofile"/>}
      {phone && !token && <CheckSmsForm onSuccess={checkSmsSuccess} phone={phone} type="sms_noprofile"/>}
      {phone && token &&
      <RegisterForm
        onSuccess={registerSuccess}
        phone={phone}
        token={token}
        pagePers={pagePers}
        pageRules={pageRules}
      />}
    </View>
  );
};

export default RegisterScreen;
