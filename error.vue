<template>
  <NuxtLayout>
    <div class="container-fluid" id="innerpage">
      <div class="container-lg" id="innerpageBody">
          <div id="errorPageContent">
            <template v-if="error.statusCode === 404">
              <h1>404!</h1>
              <h2>Sorry, that page doesn't exist.</h2>
            </template>
            <template v-else>
              <h1>Ooops...</h1>
                <p>It looks like something broke.</p>
                <!--<p>
                  <strong>"{{ error.message }}""</strong>
                </p>-->
                <p>Sorry about that.</p>
            </template>
            <p>
              Go back to your <a  @click="handleError">dashboard.</a>
            </p>
          </div>
        </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
  </script>