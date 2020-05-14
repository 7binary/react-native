import React from 'react';

import constants from 'assets/styles/constants';

import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

interface IHeaderOptions {
  headerStyle: {backgroundColor: string};
  headerTitle: () => JSX.Element;
  headerLeft: () => JSX.Element;
  headerRight: () => JSX.Element;
}

const HeaderOptions: IHeaderOptions = {
  headerStyle: {
    backgroundColor: constants.header.backgroundColor,
  },
  headerTitle: () => <HeaderCenter/>,
  headerLeft: () => <HeaderLeft/>,
  headerRight: () => <HeaderRight/>,
};

export default HeaderOptions;