
<script setup>

import { ref } from 'vue';

const errorInfo = defineProps(['errorMessage'])



let fetchErrorMessage = errorInfo.errorMessage.toString()

let newErrorMessage = ref("");

if(fetchErrorMessage.includes("400")){
    newErrorMessage.value = "Enter a valid github user name"
}else if(fetchErrorMessage.includes("404")){
    newErrorMessage.value = "Github user not found"
}else if(fetchErrorMessage.includes("500")){
    newErrorMessage.value = "Oops an error has occured. Try again later"
} 

</script>


<template>

<div>
    <p>{{ newErrorMessage }}</p>
</div> 

</template>

<style scoped>

div{
    position: relative;
    left: 80px;
    color: red;
    background-color: #141d2f; 
}

</style>
    