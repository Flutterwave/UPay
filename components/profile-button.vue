<template>
  <ion-buttons slot="end">
    <ion-button
      @click="$UserHelper.logOut()"
      color="primary"
      style="color: red"
    >
      <ion-icon
        name="power-outline"
        slot="icon-only"
        style="color: red !important"
      ></ion-icon>
    </ion-button>
  </ion-buttons>
</template>

<script>
export default {
  name: "ProfileButton",
};
</script>

<style scoped></style>
