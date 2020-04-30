// Storage example from https://capacitor.ionicframework.com/docs/apis/storage/
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export default class StorageService {
    static async setObject(key, object) {
      await Storage.set({
        key,
        value: JSON.stringify(object)
      })
    }

    static async getObject(key) {
      const ret = await Storage.get({ key });
      return JSON.parse(ret.value);
    }

    static async setItem(key, value) {
      // Modified to show undefined is returned, not Promise<void>
      const resp = await Storage.set({
        key,
        value
      });
      return resp;
    }

    static async getItem(key) {
      const { value } = await Storage.get({ key });
      return value;
    }

    static async removeItem(key) {
      await Storage.remove({ key });
    }

    static async getKeys() {
      const { keys } = await Storage.keys();
      return keys;
    }

    static async clear() {
      await Storage.clear();
    }
}
