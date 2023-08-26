
<script setup></script>


<template>

<div class="loader"></div> 

</template>

<style scoped>

div{
    border: solid 1px;
    background-color: #141d2f;

}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
    