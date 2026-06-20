export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  
  const { isAuthenticated } = useAuthentication();

  // const notAuthenticatedRoutes = ['/login','/register']

  if (isAuthenticated.value  && (to.path.startsWith('/register') || to.path.startsWith('/login') )) {
    return navigateTo('/');
  }
});