export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated, fetch } = useAuthentication()

  await fetch()

  const path = to.path.replace(/\/$/, '')
  const notAuthenticatedRoutes = ['/login', '/register']

  if (notAuthenticatedRoutes.includes(path) && isAuthenticated.value) {
    return navigateTo('/', { replace: true })
  }
})