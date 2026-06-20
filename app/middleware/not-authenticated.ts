export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];

  const path = to.path.replace(/\/$/, '')

  if (isAuthenticated.value) {
    console.log('Not Authenticated middleware:', 'redirecciona a home');
    return navigateTo("/");
  }
});
