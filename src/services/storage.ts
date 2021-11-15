import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  private storage: typeof AsyncStorage;
  constructor() {
    this.storage = AsyncStorage;
  }

  setKey = async (value: string) => {
    await this.storage.setItem('myKey', value);
  };

  getKey = async () => {
    return (await this.storage.getItem('myKey')) || '';
  };

  removeKey = async () => {
    await this.storage.removeItem('myKey');
  };
}

export const storage = new Storage();
