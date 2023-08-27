
<script setup>


defineProps(['userImage'])




</script>


<template>
        <span class="userImage">
        <!-- <img  v-if="!userImage" src="@/assets/userImage.png" alt="toggle theme"> -->
        <img src="{userImage}" alt="user github image">
        </span>
</template>



<style scoped>
.userImage img{
        width: 100px;
}
</style>
    