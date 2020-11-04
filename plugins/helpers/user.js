


export default (context, inject) => {

  const UserHelper = {
    userToken: '',
    updateUserToken(token){
      this.userToken = token
      context.$axios.setHeader('Authorization', token);
      console.log("New Token = ", this.userToken)
    },

    updateUserDetails(userDetails){

      localStorage.setItem('user', JSON.stringify(userDetails) )
    },
    getUserDetails(){
    let userDetails =  localStorage.getItem('user')
    if(!userDetails){
      userDetails = "{}"
    }
      return JSON.parse(userDetails)
    },

    logOut(){
      this.updateUserToken('');
      this.updateUserDetails({})
      context.$Utils.navigateTo('/login')
    }
  };

  inject('UserHelper', UserHelper)
}
