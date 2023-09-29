export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (process.server) return;
  
  console.log('auth middleware called. isLoggedIn: '+auth.isLoggedIn);
  if (!auth.isLoggedIn) {
    return navigateTo('/signin')
  }
  
  /*
  if (!auth.isLoggedIn) {
    console.log('entered !isLoggedIn: '+auth.isLoggedIn);
    //return navigateTo("/signin");
  }*/
})
