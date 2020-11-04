<template>

  <ion-buttons slot="end">

    <ion-button @click="$UserHelper.logOut()" color="primary" style="color: red">
      <!-- <ion-icon slot="icon-only" ios="" md="ellipsis-vertical"></ion-icon>-->
      <ion-icon name="power-outline" slot="icon-only" style="color: red !important;"></ion-icon>
    </ion-button>

  </ion-buttons>
</template>

<script>
    export default {
        name: "profileButton"
    }
</script>

<style scoped>

</style>
