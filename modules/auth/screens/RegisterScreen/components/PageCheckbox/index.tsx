import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Checkbox, Button, TouchableRipple, Dialog, Portal } from 'react-native-paper';
import HTMLView from 'react-native-htmlview';

import Page from 'types/Page';
import styles from './styles';
import stylesHtml from 'assets/styles/stylesHtml';

export interface IProp {
  accepted: Function;
  declined: Function;
  page: Page;
  textIntro: string;
  textLink: string;
}

const PageCheckbox: React.FC<IProp> = ({accepted, declined, page, textIntro, textLink}) => {
  const [checked, setChecked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const onPressCheckbox = () => {
    if (!checked) {
      setShowDialog(true);
    } else {
      setChecked(false);
      declined();
    }
  };

  const acceptAction = () => {
    setShowDialog(false);
    setChecked(true);
    accepted();
  };

  return (
    <>
      <TouchableRipple onPress={onPressCheckbox} style={styles.container}>
        <View style={styles.row}>
          <View pointerEvents="none" style={styles.checkboxContainer}>
            <Checkbox status={checked ? 'checked' : 'unchecked'}/>
          </View>
          <Text style={styles.label}>
            {textIntro} <Text style={styles.link}>{textLink}</Text>
          </Text>
        </View>
      </TouchableRipple>

      <Portal>
        <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
          <ScrollView contentContainerStyle={styles.dialogScrollview}>
            <HTMLView value={page.content} stylesheet={stylesHtml} addLineBreaks={false}/>
          </ScrollView>
          <Dialog.Actions>
            <Button onPress={acceptAction} mode="contained">Согласен</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default PageCheckbox;