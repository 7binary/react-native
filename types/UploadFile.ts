import ImagePicker from 'react-native-image-picker';

import DropdownAlertService from 'services/DropdownAlertService';

export default class UploadFile {
  base64: string;
  uri: string;

  constructor(base64: string, uri: string) {
    this.base64 = base64;
    this.uri = uri;
  }

  static get(title: string, success: (uploadFile: UploadFile) => void): void {
    const options = {
      title,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      } else if (response.error) {
        DropdownAlertService.alert('error', response.error);
        return;
      }
      const file = new UploadFile(`data:image/jpeg;base64,${response.data}`, response.uri);
      success(file);
    });
  }
}