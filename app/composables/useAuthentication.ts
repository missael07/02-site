export const useAuthentication = () => {
  const { loggedIn, session, user, clear, fetch } = useUserSession();

  const login = async (email: string, password: string) => {
    try {
      await $fetch('/api/auth/login', {
        method: 'POST',
        body: { email, password },
      });

      await fetch();
      await navigateTo('/', {replace: true});

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const register = async (
    fullName: string,
    email: string,
    password: string
  ) => {
    // await $fetch('/api/auth/login') // register

    return true;
  };

  const logout = async () => {
    await clear();
    navigateTo('/');
  };

  return {
    loggedIn,
    session,
    user,

    // Getters
    isAuthenticated: loggedIn,
    isAdmin: computed(() => user.value?.roles.includes('admin')),

    // Methods, Acciones
    fetch,
    login,
    register,
    logout,
  };
};