export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  const { isAuthenticated } = useAuthentication();

  // const notAuthenticatedRoutes = ['/login','/register']

  if (to.path.startsWith('/login') && isAuthenticated.value) {
    return navigateTo('/');
  }

  if (to.path.startsWith('/register') && isAuthenticated.value) {
    return navigateTo('/');
  }
});