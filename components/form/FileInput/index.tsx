import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Button } from 'react-native-paper';

import UploadFile from 'types/UploadFile';
import styles from './styles';

interface IProps {
  title: string;
  file: UploadFile | null;
  setFile: (file: UploadFile) => void;
}

const FileInput: React.FC<IProps> = ({title, file, setFile}) => {
  return (
    <View style={styles.container}>
      {file && <FastImage
        source={{uri: file.uri}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />}
      <Button
        mode="outlined"
        onPress={() => UploadFile.get(title, uploadFile => setFile(uploadFile))}>
        {title}
      </Button>
    </View>
  );
};

export default FileInput;