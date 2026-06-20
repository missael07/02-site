export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated, isAdmin, fetch } = useAuthentication();

  console.log("Auth middleware:", isAuthenticated.value);
  await fetch();
  console.log("Auth middleware:", isAuthenticated.value);

  console.log("Auth middleware:", from.path);
  console.log("Auth middleware:", to.path);
  console.log("Auth middleware:", isAuthenticated.value);

  console.log('AUTH middleware:',{
  from: from.path,
  to: to.path,
  authenticated: isAuthenticated.value,
  stack: new Error().stack
})
  if (!isAuthenticated.value) {
    return navigateTo("/login");
  }

  if (to.path.startsWith("/dashboard") && !isAdmin.value) {
    console.log(123);
    return navigateTo("/");
  }

  //   if (to.path.startsWith("/dashboard") && !isAdmin) {
  //     return abortNavigation();
  //   }
});
