export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];
    console.log('guest middleware:', isAuthenticated.value)
    await fetch()
    console.log('guest middleware:', isAuthenticated.value)
  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    return navigateTo("/");
  }
});
