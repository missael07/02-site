export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuthenticated, isAdmin } = useAuthentication();
    if (!isAuthenticated.value) {
      
    return navigateTo("/login");
  }

    if (to.path.startsWith("/dashboard") && !isAdmin.value) {
      console.log(123)
    return navigateTo("/");
  }

//   if (to.path.startsWith("/dashboard") && !isAdmin) {
//     return abortNavigation();
//   }
});
