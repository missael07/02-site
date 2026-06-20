export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated, isAdmin } = useAuthentication();
  const notAuthenticatedRoutes = ["/login", "/register"];

  if (notAuthenticatedRoutes.includes(to.path) && isAuthenticated.value) {
    return navigateTo("/");
  }
});
