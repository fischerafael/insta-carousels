import React from "react";
import { handleLogIn } from "../../infra/firebase";
import { useUserStore } from "../../store/useUserStore";
import { cookie } from "../../utils/cookie";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const useSession = () => {
  const userStore = useUserStore();

  const handleLoginWithGoogle = async () => {
    const user = await handleLogIn();
    const userData = {
      email: user?.email!,
      id: user?.uid!,
      displayName: user?.displayName!,
      photoURL: user?.photoURL!,
    };
    userStore.methods.setUser(
      userData.email,
      userData.id,
      userData.displayName,
      userData.photoURL
    );
    cookie.set(undefined, userData);
    handleNavigateTo("/app");
  };

  const handleLogout = () => {
    userStore.methods.setUser("", "", "", "");
    cookie.destroy();
    handleNavigateTo("/");
  };

  React.useEffect(() => {
    const userData: any = cookie.get();
    // if (!!userStore.state.email) return;
    if (!userData) {
      handleLogout();
      return;
    }
    cookie.set(undefined, userData);
    userStore.methods.setUser(
      userData.email,
      userData.id,
      userData.displayName,
      userData.photoURL
    );
  }, []);

  const isLogged = !!userStore.state.email;

  return { handleLoginWithGoogle, handleLogout, isLogged };
};
