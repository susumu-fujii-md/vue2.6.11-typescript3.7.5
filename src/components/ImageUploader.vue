<template>
  <form @submit="submit">
    <label>Image: <input type="file" name="file" @change='selectFile' /></label>
    <Button buttonLabel="SUBMIT" />
  </form>
</template>>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Emit } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { HTMLElementEvent } from '@/types/Common';

@Component({
  data() {
    return {
      uploadFile: {},
    };
  },
  components: {
    Button,
  },
})
export default class ImageUploader extends Vue {
  @Emit()
  selectFile(e: HTMLElementEvent<HTMLInputElement>): void {
    const files = e.target.files;
    this.uploadFile = files[0];
  }

  @Emit()
  submit(e: Event): void {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', this.uploadFile);

    axios.post(
      'http://127.0.0.1:3000/upload',
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
    );
  }
}
</script>