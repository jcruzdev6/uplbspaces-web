<template>
  <div>
     <PageBreadcrumbs page_name="Verify Account" />
     <div class="container-fluid" id="innerpage">
         <div class="container-lg" id="innerpageBody">
            <div id="innerpageBodyContentVerify">
              <div class="verifyPageHead">
                  <div>Verify Account</div>
              <div>
              <div class="verifyPageBlock">
                <br>
                  <div v-if="loading" class="d-flex justify-content-center">
                    <div class="spinner-border text-danger" role="status">
                      <span class="sr-only"></span>
                    </div>
                  </div>
                  <div v-if="!loading" class="d-flex justify-content-center">
                    <div v-html="message" :class="(success) ? 'text-success' : 'text-danger'" class="lead text-center">
                    </div>
                  </div>
              </div>
            </div>    
         </div>    
        </div>
      </div>
  </div>    
 </div>    
</template>
<script setup>
const loading = ref(true);
const route = useRoute()
const auth = useAuthStore();
const message = ref("");
const success = ref(true);

const verifyLogin = async (values) => {
  
  if (auth.isLoggedIn) {
    return navigateTo("/");
  }
  console.log('verifyLogin');
  const { data, error } = await auth.verify(route.query.email, route.query.token);
  
  if (!error.value) {
    console.log('login successful')
    message.value = 'Your account is now verified.<br>Click <a href="#" data-bs-toggle="modal" data-bs-target="#modalSignin">here</a> to login to your account.';
    loading.value = false;
  } else {
    console.log('error')
    message.value = error.value.data.message;
    loading.value = false;
    success.value = false;
  }
}
verifyLogin();
</script>