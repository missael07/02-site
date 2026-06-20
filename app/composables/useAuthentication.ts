export const useAuthentication = () => {
  const { loggedIn, session, user, clear, fetch } = useUserSession();

  const login = async (email: string, password: string) => {
    try {
      await $fetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
        credentials: "include",
      });

      await fetch();

      if (!loggedIn.value) {
        console.log("Login OK pero sesión no cargó");
        return false;
      }

      await navigateTo("/", { replace: true });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const register = async (
    fullName: string,
    email: string,
    password: string,
  ) => {
    try {
      await $fetch("/api/auth/login", {
        method: "POST",
        body: { email, password },
      });
      navigateTo("/");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = async () => {
    await clear();

    console.log(loggedIn.value);

    navigateTo("/");
  };

  return {
    // Variables
    loggedIn,
    session,
    user,

    // Getters
    isAuthenticated: loggedIn,
    isAdmin: computed(() => user.value?.roles.includes("admin")),
    // Methods
    fetch,
    login,
    register,
    logout,
  };
};
