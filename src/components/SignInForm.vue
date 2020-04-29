<template>
  <form @submit="submit">
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
    <label>User ID (email): <input type="text" v-model="userId"></label>
    <label>Password: <input type="text" v-model="password"></label>
    <Button buttonLabel="SUBMIT" />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import _ from 'lodash';

import Button from '@/components/Button.vue'
import { SignUpModule } from '@/modules/SignUpModule'
import { UserType } from '@/types/UserType'
import config from '@/mixins/Config';

@Component({
  mixins: [config],
  methods: {
    requestSignIn() {
      console.log('signIn was called.');
      this.signIn({
        userId: this.userId,
        password: this.password
      });
    }
  },
  components: {
    Button
  }
})
export default class Form extends Vue {
  userId: string = '';
  password: string = '';

  errors: string[] = [];

  @Emit()
  submit(e: Event): void {
    e.preventDefault();
    this.errors = [];

    if (!this.userId) {
      this.errors.push('User ID is required.');
    }

    if (!this.password) {
      this.errors.push('Password is required.');
    }

    // TODO: Error handling for type check.
    SignUpModule.SET_USER_ID(this.userId);

    if (this.userId && this.password) {
      this.requestSignIn({
        userId: this.userId,
        password: this.password,
      });
    }
  }
}
</script>