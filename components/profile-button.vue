<template>

  <ion-buttons slot="end">

    <ion-button color="primary" @click="$UserHelper.logOut()">
      <!-- <ion-icon slot="icon-only" ios="" md="ellipsis-vertical"></ion-icon>-->
      <ion-icon slot="icon-only" name="person-circle"></ion-icon>
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
