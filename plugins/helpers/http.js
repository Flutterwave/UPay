export default (context, inject) => {

  context.$axios.onRequest(config => {

    let userToken = context.$UserHelper.getUserDetails().token
    config.headers.common['Authorization'] = userToken
    console.log("Axios Config",config)
  })

  context.$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
     // redirect('/400')
    }
  })

  const Http = {
    'get': (url, params) => {



    },


  };


  inject('Http', Http);

}
