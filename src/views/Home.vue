<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
