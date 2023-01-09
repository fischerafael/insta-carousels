import create from "zustand";

export interface IUser {
  name: string;
  email: string;
  photoURL: string;
  id: string;
}

export interface IUserMethods {
  setUser(email: string, id: string, name: string, photoURL: string): void;
}

export interface IUserState {
  state: IUser;
  methods: IUserMethods;
}

export const useUserStore = create<IUserState>((set) => ({
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  state: {
    name: "",
    email: "",
    photoURL: "",
    id: "",
  },
  methods: {
    setUser: (email: string, id: string, name: string, photoURL: string) =>
      set((state) => ({
        ...state,
        state: {
          ...state.state,
          email: email,
          id: id,
          name: name,
          photoURL: photoURL,
        },
      })),
  },
}));
