<template>
  <ion-buttons slot="start">
    <ion-button @click="$Utils.navigateBack" color="primary">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </ion-button>
  </ion-buttons>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style scoped></style>
