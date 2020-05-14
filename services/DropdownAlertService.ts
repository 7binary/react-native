import DropdownAlert, { DropdownAlertType } from 'react-native-dropdownalert';

export default class DropdownAlertService {
  static ref: DropdownAlert | null = null;

  static set(ref: DropdownAlert): void {
    this.ref = ref;
  }

  static alert(type: DropdownAlertType, title: string, message?: any, payload?: any, interval?: number): boolean {
    if (this.ref) {
      this.ref.alertWithType(type, title, message, payload, interval);
      return true;
    }
    return false;
  }
}
