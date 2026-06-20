export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];
    console.log('guest middleware:', isAuthenticated.value)
    await fetch()
  console.log('guest middleware:', isAuthenticated.value)
  
  console.log(notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value)

  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    console.log('redirecciona a home');
    return navigateTo("/");
  }
});
