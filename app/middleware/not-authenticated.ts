export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];
    console.log('Not Authenticated middleware:', isAuthenticated.value)
    await fetch()
  console.log('Not Authenticated middleware:', isAuthenticated.value)
  
  console.log('Not Authenticated middleware:', notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value)
  console.log('Not Authenticated middleware:', notAuthenticatedRoutes.includes(to.path) )
  console.log('Not Authenticated middleware:', to.path )
  console.log('Not Authenticated middleware:', isAuthenticated.value)

  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    console.log('Not Authenticated middleware:', 'redirecciona a home');
    return navigateTo("/");
  }
});
