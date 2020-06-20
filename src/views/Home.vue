<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Sign Up</h2>
    <SignUpForm />
    <hr />
    <h2>Sign In</h2>
    <SignInForm />
    <hr />
    <h2>Upload Image</h2>
    <ImageUploader />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from "@/components/SignUpForm.vue";
import SignInForm from "@/components/SignInForm.vue";
import ImageUploader from "@/components/ImageUploader.vue";

export default {
  name: "Home",
  components: {
    SignUpForm,
    SignInForm,
    ImageUploader,
  },
};
</script>
