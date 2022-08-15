<template>


            <form @submit.prevent="postData"  method="POST">  <!--Setting up a on click function to post data-->
              <div>
               <label for="User " >Book</label>
                <input v-model="book" required  placeholder="Book Name">
                <label for="User message" >Quote</label>
                <input v-model="quote" required  placeholder="Quote">
              </div>

              <button @click="update">Submit</button>

            </form>

</template>

<script>
import axios from 'axios'  //Importing axios 

export default {
  name: "Compose",
  
  data(){
    return {                       //Setting data schema
            book: '',
            quote: '',
    }
  },



  methods:{

    
    postData(){
          const  book = this.book        //Taking the input values and setting them to a variable.
          const  quote = this.quote

      

          const data = {book:book, quote:quote}  //creating a data object to be sent to backend

        
        axios.post('http://localhost:8080/data', data)         // port('THE URL LINK FOR POST API', THE DATA TO BE SENT)
        .then( response => console.log(response))
        .catch( err => console.log(err))



    }


  }

};
</script>


<style scoped>

</style>
