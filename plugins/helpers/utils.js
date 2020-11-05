export default (context, inject) => {

  const Utils = {
    navigateBack() {
      context.redirect(context.from.path);

    },
    navigateTo(path) {
      context.redirect(path);
    },

    isMobileView() {
      return false
    },

    async presentToast(message, duration = '5000', position = 'top', header = '', buttons = []) {

      const toast = document.createElement('ion-toast');


      toast.message = message;
      toast.position = position;
      toast.duration = duration;

      if (buttons) {
        toast.buttons = buttons
      }

      if (header) {
        toast.header = header;
      }


      document.body.appendChild(toast);
      return toast.present();

    },

    toUpper(str) {
      return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
          console.log("First capital letter: " + word[0]);
          console.log("remain letters: " + word.substr(1));
          return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    },
    loading: document.createElement('ion-loading'),
    async showSpinner(message = '') {

      this.loading.message = message;
      this.loading.translucent = true;
      this.loading.backdropDismiss = false;

      document.body.appendChild(this.loading);
      await this.loading.present();

      const {role, data} = await this.loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
    },
    async dismissSpinner() {
      document.body.removeChild(this.loading);
    }

  };


  inject('Utils', Utils)
}
