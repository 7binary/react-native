import constants from 'assets/styles/constants';

interface IHeaderPopupOptions {
  headerBackTitle: string;
  headerStyle: any;
  headerTintColor: string;
  headerTitleStyle: any;
}

const HeaderPopupOptions: IHeaderPopupOptions = {
  headerBackTitle: ' ',
  headerStyle: {
    backgroundColor: constants.header.backgroundColor,
  },
  headerTintColor: '#FAFAFA',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default HeaderPopupOptions;