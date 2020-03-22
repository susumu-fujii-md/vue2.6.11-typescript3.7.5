<template>
  <div>
    <button>{{ buttonLabel }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop() private buttonLabel!: string;
}
</script>