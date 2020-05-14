import constants from 'assets/styles/constants';

interface IHeaderPopupOptions {
  headerBackTitle: string;
  headerStyle: any;
  headerTintColor: string;
  headerTitleStyle: any;
}

const HeaderPopupLightOptions: IHeaderPopupOptions = {
  headerBackTitle: ' ',
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: constants.colors.primary,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default HeaderPopupLightOptions;