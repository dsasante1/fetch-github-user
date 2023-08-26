
<script setup>

defineProps(['errorMessage'])
</script>


<template>

<div>
    {{ errorMessage }}
</div> 

</template>

<style scoped>

div{
    border: solid 1px;
    width: 50px;
    height: 100px;
    color: red;
    background-color: #141d2f;
}

</style>
    