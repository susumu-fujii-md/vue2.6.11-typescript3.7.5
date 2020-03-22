<template>
  <div>
    <label>{{ label }}: <input type="text" v-model="todo"></label>
    <p>{{ todo }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
  @Prop() private label!: string;
  data () {
    return {
      todo: ''
    }
  }
}
</script>