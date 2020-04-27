<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Sign Up</h2>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'

export default {
  name: 'Home',
  components: {
    Form
  }
}
</script>
