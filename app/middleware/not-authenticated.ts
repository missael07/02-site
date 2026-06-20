export default defineNuxtRouteMiddleware( async (to, from) => {
  const { isAuthenticated, fetch } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];

    await fetch()

  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    return navigateTo("/");
  }
});
