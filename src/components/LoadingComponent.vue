
<script setup></script>


<template>
<div class="body">
  <div class="loader">
</div>


  
</div> 

</template>

<style scoped>

div{
    border: solid 1px;
    background-color: #141d2f;


}

.body{
  background-color: #141d2f;
  padding-bottom: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.loader {

  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 90px;
  height: 90px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
    