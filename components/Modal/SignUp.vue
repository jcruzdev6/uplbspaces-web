<template>
   <div class="modal fade" id="modalSignup" tabindex="-1" aria-labelledby="modalSignupLabel" aria-hidden="true">
    <Form @submit="handleRegister" :validation-schema="schema" v-slot="{ errors }">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>
        <div class="modalContainer">
          <div class="modalTitleContainer">
            <h3 class="modalTitle" id="modalSignupLabel">Sign Up</h3>
          </div>
          <div class="msgError">{{ message }}</div>

          <label for="modalSignupForm-email">Enter email</label>
          <Field type="email" name="email" id="modalSignupForm-email" class="form-control form-control-sm rounded" placeholder="email" />
          <div class="msgError">{{errors.email}}</div>

          <label for="modalSignupForm-password">Enter password</label>
          <Field type="password" name="password" id="modalSignupForm-password" class="form-control form-control-sm rounded" placeholder="password" />
          <div class="msgError">{{errors.password}}</div>

          <label for="modalSignupForm-password2">Confirm password</label>
          <Field type="password" name="password_confirmation" id="modalSignupForm-password2" class="form-control form-control-sm rounded" placeholder="confirm password" />
          <div class="msgError">{{errors.password_confirmation}}</div>
  
          <div class="d-flex" style="align-items: center;">
            <Field class="form-check-input me-1" type="checkbox" value="true" name="agree" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">Agree to <NuxtLink @click="useModalDisplay('modalSignup');" to="/pages/5">Terms &amp; Conditions</NuxtLink></label>
          </div>
          <div class="msgError">{{errors.agree}}</div>
  
          <div class="d-grid">
            <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign Up </button>
          </div>
  
          <a href="#modalSignin" data-bs-target="#modalSignin" data-bs-toggle="modal">Already a member? Sign In</a>
          <div class="my-3"><strong>or</strong></div>
          
          <div class="d-grid">
            <button type="button" class="socialBtn"><div><img src="/images/facebook-logo.png" width="30" height="30" class="me-3">Continue with Facebook</div></button>
            <button type="button" class="socialBtn"><div><img src="/images/google-logo.png" width="27" height="27" class="me-3">Continue with Google</div></button>
          </div>
        </div>
        <div v-if="loading" id="loading" class="loading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="ms-3">Loading...</div>
        </div>
        <div v-if="successful" id="loading" class="modalSuccess">
          <div role="status">
            <h1 class="text-success">Signup successful!</h1>
            A welcome email has been sent to you. Kindly click the verification link to confirm your registration.
            <div><button data-bs-dismiss="modal" class="toggleBtnDark">Close this window</button></div>
          </div>
         
        </div>
      </div>
    </div>
  </form>
  </div>
</template>

<script setup>

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

//const { $bootstrap } = useNuxtApp()
const auth = useAuthStore();
const message = ref("");
const loading = ref(false);
const successful = ref(false);

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    password_confirmation: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
    agree: Yup.bool()
        .required('Accept Terms & Conditions is required')
});


const handleRegister = async (values) => {
  loading.value = true;
  const { data, error } = await auth.signup(values);
  if (!error.value) {
    loading.value = false;
    successful.value = true;
    //useModalDisplay('modalSignup');
    //navigateTo("/");
  } else {
    message.value = error.value.data.message;
  }
}

</script>

