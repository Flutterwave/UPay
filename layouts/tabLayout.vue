<template>
  <a-layout>
    <a-layout-header>
      <h3 style="color: white">
        Header
      </h3>
    </a-layout-header>

    <a-layout-content>






      <Nuxt />
    </a-layout-content>




  </a-layout>
</template>

<script>
    import { AppleOutlined, AndroidOutlined } from 'ant-design-vue/lib';

    export default {
        name: "tabLayout",
        components: {
            AppleOutlined,
            AndroidOutlined,
        }
    }
</script>

<style scoped>

</style>
