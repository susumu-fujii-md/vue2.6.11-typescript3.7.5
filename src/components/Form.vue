<template>
  <form @submit="submit">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <label>{{ label }}: <input type="text" v-model="value"></label>
    <p>{{ value }}</p>
    <Button buttonLabel="SUBMIT" />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Form extends Vue {
  value: string = '';
  errors: Array<string> = [];

  @Prop() private label!: string;

  @Emit()
  submit(e: Event) {
    e.preventDefault();
    this.errors = [];

    if (!this.value) {
      this.errors.push('Item is required.');
    }

    return this.value;
  }
}
</script>