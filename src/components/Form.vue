<template>
  <div>
    <label>{{ label }}: <input type="text" v-model="todo"></label>
    <p>{{ todo }}</p>
    <Button buttonLabel="SUBMIT" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Form extends Vue {
  @Prop() private label!: string;
  data () {
    return {
      todo: ''
    }
  }
}
</script>