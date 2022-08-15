<template>

<div class="head">

<h1>Hello World</h1>
<p></p>
</div>


<div v-for="{book,quote} in data" :key="data.id">   <!--Setting up a loop for recieved data.-->
<div class="dataDrive">  
<h3>{{book}}</h3>
<p>" {{quote}} " </p>


</div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  
  data(){
    return{
      data:''   //Data schema to store data locally for rendering.
    }
  },

  mounted() {
    axios
      .get("http://localhost:8080/get-data")   //get('URL FROM WHERE WE WILL RECIEVE DATA')
      .then((response) => {
        this.data = response.data   // Setting the response data as data.
        console.log(this.data);
      }).catch(err => {console.log(err)
        this.errored=true})
        
  },
};
</script>


<style scoped>

.head{
    display: grid;
    align-content: center;
    justify-content: center;
    width:100vw;
    height:60vh;
    padding:20px;
    font-size: 2rem;
}


.dataDrive{
    text-align: left;
    margin: 5vh auto;
    border-radius: 20px;
    background-color: aliceblue;
    width:80vw;
    padding: 10px;
    
}

</style>
