export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];
    console.log('Not Authenticated middleware antes fetch: ', isAuthenticated.value)
    await fetch()
  console.log('Not Authenticated middleware despues fetch:', isAuthenticated.value)
  
  console.log('Not Authenticated middleware valiadcion:', notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value)
  console.log('Not Authenticated middleware incluye el path:', notAuthenticatedRoutes.includes(to.path) )
  console.log('Not Authenticated middleware from :', from.path )
  console.log('Not Authenticated middleware to:', to.path )
  console.log('Not Authenticated middleware autenticado:', isAuthenticated.value)

  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    console.log('Not Authenticated middleware:', 'redirecciona a home');
    return navigateTo("/");
  }
});
