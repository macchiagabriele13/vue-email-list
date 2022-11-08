const { createApp } = Vue

createApp({
  data() {
    return {
      my_email:[]
    }
  },
  methods:{
    getEmails(){ 
        for (let index = 0; index < 10; index++) {
            
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.my_email.push(response.data.response)
            } )
            
        }
    }

  },
  mounted(){
    this.getEmails()
  }
}).mount('#app')