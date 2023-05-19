<script setup lang="ts" name="Homes">
// import TheWelcome from '@/components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
import { useUser } from '@/utlis/composables/useUser'
import { useDecorator } from '@/utlis/composables/useDecorator'

const { loggedIn, user, logout } = useUser()
const { refName, refAge, newname } = useDecorator()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
        <RouterLink v-if="!loggedIn" to="/login">
          login
        </RouterLink>
        <RouterLink
          v-if="loggedIn"
          to="/login"
          @click="logout"
        >
          logout ({{ user.username }})
        </RouterLink>
        <RouterLink to="/upload">
          upload
        </RouterLink>
        <RouterLink to="/vform">
          vform
        </RouterLink>
      </nav>
    </div>
    <div>
      <input v-model="refName" type="text">
      <input v-model="refAge" type="text">
      <span>{{ newname }}</span>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
