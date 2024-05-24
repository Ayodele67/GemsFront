

<template>
<nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/reg">Reg</RouterLink>
  </nav>
   <main>
    <RouterView />
  </main>
</template>




<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import BaseInput from './components/BaseInput.vue'
import Register from './views/Register.vue'
import Login from '@/views/Login.vue'

</script>
<style scoped>
header {
  line-height: 0.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
