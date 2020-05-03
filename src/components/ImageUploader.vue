<template>
  <form @submit="submit">
    <label>Image: <input type="file" /></label>
    <Button buttonLabel="SUBMIT" />
  </form>
</template>>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import Button from '@/components/Button.vue'

@Component({
  methods: {
    uploadImage() {
      console.log('uploadImage was called.');
    }
  },
  components: {
    Button
  }
})
export default class ImageUploader extends Vue {
  @Emit()
  submit(e: Event): void {
    e.preventDefault();

    this.uploadImage();
  }
}
</script>