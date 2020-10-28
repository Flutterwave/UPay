<template>

  <ion-buttons slot="start">

    <ion-button color="primary" @click="$Utils.navigateBack">
      <!-- <ion-icon slot="icon-only" ios="" md="ellipsis-vertical"></ion-icon>-->
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-button>

  </ion-buttons>
</template>

<script>
    export default {
        name: "BackButton"
    }
</script>

<style scoped>

</style>
