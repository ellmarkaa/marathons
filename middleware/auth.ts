export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  const user = computed(() => authStore.user)
  if (!user.value) {
    return navigateTo('/');
  }
});
