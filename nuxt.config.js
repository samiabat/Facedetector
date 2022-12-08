export default {
    modules: [
      '@nuxtjs/axios'
    ],
  
    axios: {
      baseURL: 'https://face-detect.up.railway.app',
    },
  
    publicRuntimeConfig: {
      axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL
      }
    },
  
    privateRuntimeConfig: {
      axios: {
        baseURL: process.env.BASE_URL
      }
    },
  }