<template>
  <form @submit="submit">
    <p v-if="errors && errors.length > 0">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="generateKey(index)">{{ error }}</li>
      </ul>
    </p>
    <label>User ID (email): <input type="text" v-model="userId"></label>
    <label>Password: <input type="text" v-model="password"></label>
    <Button buttonLabel="SUBMIT" type="submit" />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import _ from 'lodash';

import Button from '@/components/Button.vue';
import { SignUpModule } from '@/modules/SignUpModule';
import { SignUpType } from '@/types/';
import config from '@/mixins/Config';

@Component({
  mixins: [config],
  methods: {
    requestSignIn() {
      (this as any).signIn({
        userId: (this as any).userId,
        password: (this as any).password,
      });
    },
    generateKey(index) {
      return `error-${index}`;
    },
  },
  components: {
    Button,
  },
})
export default class SignInForm extends Vue {
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
      (this as any).requestSignIn({
        userId: this.userId,
        password: this.password,
      });
    }
  }
}
</script>