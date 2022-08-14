<template>


    <div class="wrapper">
        <a href="/">
		<button class="btn warning" style="background-color:#ffe5f4;color:#cd0278;" > Home</button> </a>
		<a href="/compose">
        <button class="btn success" style="background-color:#ffe5f4;color:#cd0278;" > Compose</button>
	</a>
    </div>

</template>

<script>

export default {
  name: "navbar",

};
</script>

<style scoped>
  /* RESET */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }
  body{
    overflow-x: hidden;
    text-align: center;
    /* background-image: url("background-.jpg"); */
    background-color: #FFB3B3;
    font-family: 'Montserrat', sans-serif;
}  

.wrapper {
display: grid;
    justify-content: center;
    margin: 2vh auto;
    border-radius: 40px;

    /* background-color: #FFDBA4; */
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.875rem;
  width:80vw;   
  
  height: 7vh;
}
.btn {
  cursor: pointer;
  border-radius:4px;
  padding:0.563rem;
  font-size:0.75rem;
  font-weight:500;
  text-transform:uppercase;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
		}
.btn:hover {
  opacity:0.75;
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.2));
  transform: translateY(-9px);
}


@keyframes toastIt {
  0%,
  100% {
    transform: translateX(150%);
    opacity: 0;
  }
  10%,
  90% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* /////////////////// */

</style>
