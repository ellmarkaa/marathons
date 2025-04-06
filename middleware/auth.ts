export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  console.log('here', authStore.user);

  if (!authStore.user) {
    return navigateTo('/');
  }
});
