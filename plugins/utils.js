export default (context, inject) => {

  const Utils = {
    navigateBack () {
      context.redirect(context.from.path);

    },
    navigateTo(path){
      context.redirect(path);
    },

    isMobileView(){
      return false
    } ,

    async  presentToast(message, duration = '5000', position = 'top',header = '',buttons = []) {

      const toast = document.createElement('ion-toast');


      toast.message = message;
      toast.position = position;
      toast.duration = duration

      if(buttons){
        toast.buttons = buttons
         /* [
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          }, {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ];*/
      }

      if(header){
        toast.header = header;
      }



      document.body.appendChild(toast);
      return toast.present();

    } ,

     toUpper(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
        console.log("First capital letter: "+word[0]);
        console.log("remain letters: "+ word.substr(1));
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
  } ,
    loading : document.createElement('ion-loading'),
    async  showSpinner(message = '') {
     // const loading = document.createElement('ion-loading');

      // loading.spinner = null;
    //  loading.duration = options.duration;
      this.loading.message = message;
      this.loading.translucent = true;
     // loading.cssClass = 'custom-class custom-loading';
      this.loading.backdropDismiss = false;

      document.body.appendChild(this.loading);
      await this.loading.present();

      const { role, data } = await this.loading.onDidDismiss();
      console.log('Loading dismissed with role:', role);
    },
    async dismissSpinner (){
      document.body.removeChild(this.loading);
    }

  };


  inject('Utils', Utils)
  context.$Utils = Utils
}
