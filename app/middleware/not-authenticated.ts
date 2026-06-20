export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthentication();

  // const notAuthenticatedRoutes = ['/login','/register']

  if (to.path.startsWith('/login') && isAuthenticated.value) {
    return navigateTo('/');
  }

  if (to.path.startsWith('/register') && isAuthenticated.value) {
    return navigateTo('/');
  }
});