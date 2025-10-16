<template>
  <button @click="login">Login with SSO</button>
</template>

<script>
import { userManager } from '../auth';

export default {
  methods: {
    login() {
      userManager.signinRedirect(); // redirect user tới SSO login
    }
  }
}
</script>
