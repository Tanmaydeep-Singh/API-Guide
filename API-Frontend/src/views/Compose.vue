<template>
<navbar/>


            <form @submit.prevent="postData"  method="POST">
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
import navbar from '../components/navbar.vue'
import axios from 'axios'

export default {
  name: "Compose",
  
  components:{
    navbar,
  },

  data(){
    return {
            book: '',
            quote: '',
    }
  },



  methods:{

    
    postData(){
          const  book = this.book
          const  quote = this.quote

          console.log(book)
          console.log(quote)

          const data = {book:book, quote:quote}

        
        axios.post('http://localhost:8080/data', data)
        .then( response => console.log(response))
        .catch( err => console.log(err))



    }


  }

};
</script>


<style scoped>

</style>
