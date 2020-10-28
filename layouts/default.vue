<template>
  <ion-app>
    <nuxt />
  </ion-app>

</template>
<script>
    export default {
        created() {
            if (process.browser) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js')
              //  document.body.appendChild(recaptchaScript)
            }
        }
    }
    </script>
