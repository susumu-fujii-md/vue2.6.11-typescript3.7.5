<template>
  <form @submit="submit">
    <div v-if="errors && errors.length > 0">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="(error, index) in errors" :key="generateKey(index)">
          {{ error }}
        </li>
      </ul>
    </div>
    <label>User ID (email): <input v-model="userId" type="text" /></label>
    <label>Given Name: <input v-model="givenName" type="text" /></label>
    <label>Family Name: <input v-model="familyName" type="text" /></label>
    <label>Password: <input v-model="password" type="text" /></label>
    <Button button-label="SUBMIT" type="submit" />
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import _ from "lodash";

import Button from "@/components/Button.vue";
import { SignUpModule } from "@/modules/SignUpModule";
import { SignUpType } from "@/types/";
import config from "@/mixins/Config";

@Component({
  mixins: [config],
  methods: {
    requestSignUp() {
      (this as any).signUp({
        userId: (this as any).userId,
        givenName: (this as any).givenName,
        familyName: (this as any).familyName,
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
export default class SignUpForm extends Vue {
  userId = "";
  givenName = "";
  familyName = "";
  password = "";

  errors: string[] = [];

  @Emit()
  submit(e: Event): void {
    e.preventDefault();
    this.errors = [];

    if (!this.userId) {
      this.errors.push("User ID is required.");
    }

    if (!this.givenName) {
      this.errors.push("Given Name is required.");
    }

    if (!this.familyName) {
      this.errors.push("Family Name is required.");
    }

    if (!this.password) {
      this.errors.push("Password is required.");
    }

    // TODO: Error handling for type check.
    SignUpModule.SET_USER_ID(this.userId);

    if (this.userId && this.familyName && this.password) {
      (this as any).requestSignUp({
        userId: this.userId,
        givenName: this.givenName,
        familyName: this.familyName,
        password: this.password,
      });
    }
  }
}
</script>
