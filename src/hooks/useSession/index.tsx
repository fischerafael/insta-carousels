import React from "react";
import { handleLogIn } from "../../infra/firebase";
import { useUserStore } from "../../store/useUserStore";
import { handleNavigateTo } from "../../utils/handleNavigateTo";

export const useSession = () => {
  const userStore = useUserStore();

  const handleLoginWithGoogle = async () => {
    const user = await handleLogIn();
    userStore.methods.setUser(
      user?.email!,
      user?.uid!,
      user?.displayName!,
      user?.photoURL!
    );
    handleNavigateTo("/app");
  };

  const handleLogout = () => {
    userStore.methods.setUser("", "", "", "");
    handleNavigateTo("/");
  };

  const isLogged = !!userStore.state.email;

  React.useEffect(() => {
    if (!!userStore.state.email) return;
    handleLogout();
  }, [userStore.state.email]);

  return { handleLoginWithGoogle, handleLogout, isLogged };
};
