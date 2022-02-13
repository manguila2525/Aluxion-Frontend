<template>
  <div class="container">
    <div class="home">
      <Navbar />
      <Seccion1/>
      <Subtitle/>
      <Aluxioners/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Home/Navbar.vue'
import Seccion1 from '../components/Home/Seccion-1.vue';
import Subtitle from '../components/Home/Subtitle.vue';
import Aluxioners from '../components/Home/Aluxioners.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Seccion1,
    Subtitle,
    Aluxioners
  }
}
</script>
