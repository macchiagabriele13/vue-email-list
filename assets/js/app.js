const { createApp } = Vue

createApp({
  data() {
    return {
      my_email: null
    }
  },
  mounted(){
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
        console.log(response.data);
        this.my_email = response.data.response
    } )
  }
}).mount('#app')