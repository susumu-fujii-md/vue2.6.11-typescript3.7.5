<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Sign Up</h2>
    <SignUpForm />
    <hr>
    <h2>Sign In</h2>
    <SignInForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '@/components/SignUpForm.vue'
import SignInForm from '@/components/SignInForm.vue'

export default {
  name: 'Home',
  components: {
    SignUpForm,
    SignInForm
  }
}
</script>
