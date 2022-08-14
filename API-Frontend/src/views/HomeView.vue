<template>
<navbar/>

<div class="head">

<h1>Hello World</h1>
<p></p>
</div>


<div v-for="{book,quote} in data.slice().reverse()" :key="data.id"> 
<div class="dataDrive">  
<h3>{{book}}</h3>
<p>" {{quote}} " </p>


</div>
</div>

</template>

<script>
import navbar from '../components/navbar.vue';
import axios from 'axios';

export default {
  name: "Compose",
  
  components:{
    navbar,

  },
  data(){
    return{
      data:''
    }
  },

  mounted() {
    axios
      .get("http://localhost:8080/get-data")
      .then((response) => {
        this.data = response.data
        console.log(this.data);
      }).catch(err => {console.log(err)
        this.errored=true})
        .finally(()=>{
          this.loading=false
        });
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
