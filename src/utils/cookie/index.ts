import Cookie from "js-cookie";

const appName = "@carousel";

export const cookie = {
  set: (key: string = appName, value: string) => {
    Cookie.set(key, JSON.stringify(value));
  },
  get: (key: string = appName): string | undefined => {
    try {
      const value = Cookie.get(key);
      if (!value) return undefined;
      return JSON.parse(value);
    } catch (e: any) {
      return undefined;
    }
  },
  destroy: (key: string = appName) => {
    Cookie.remove(key);
  },
};
