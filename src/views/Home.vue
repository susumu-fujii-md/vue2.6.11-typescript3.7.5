<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Form label="Input new item" />
    <Button label="SUBMIT" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Form from '@/components/Form.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Form,
    Button
  }
}
</script>
