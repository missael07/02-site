export default defineNuxtRouteMiddleware( async (to, from) => {

  const { isAuthenticated, fetch } = useAuthentication();

  // const notAuthenticatedRoutes = ['/login','/register']
  await fetch()

  if (isAuthenticated.value  && (to.path.startsWith('/register') || to.path.startsWith('/login') )) {
    return navigateTo('/', {replace: true});
  }
});