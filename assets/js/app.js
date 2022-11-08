const { createApp } = Vue

createApp({
  data() {
    return {
      my_email:[],
      number_email: 10
    }
  },
  methods:{
    getEmails(){ 
        for (let index = 0; index < this.number_email; index++) {
            
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