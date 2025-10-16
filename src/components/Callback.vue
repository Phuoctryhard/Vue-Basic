<template>
  <div>Logging in...</div>
</template>

<script>
import { onMounted } from 'vue';
import { userManager } from '../auth';

export default {
  setup() {
    onMounted(async () => {
      try {
        const user = await userManager.signinRedirectCallback();
        console.log('✅ User logged in:', user.profile);   // info từ ID Token
        console.log('Access token:', user.access_token);

        // Lưu thông tin user (localStorage hoặc Vuex)
        localStorage.setItem('user', JSON.stringify(user.profile));
      } catch (err) {
        console.error('❌ Login callback error:', err);
      }
    });
  }
}
</script>
