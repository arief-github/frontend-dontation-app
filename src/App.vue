<template>
  <div class="h-screen">
    <header-web />

    <!-- content -->
    <router-view></router-view>

    <footer-web />
  </div>
</template>

<script>
import FooterWeb from './components/Footer.vue';
import HeaderWeb from './components/Header.vue';

export default {
  name: 'App',
  components: {
    HeaderWeb,
    FooterWeb
  }
}
</script>
