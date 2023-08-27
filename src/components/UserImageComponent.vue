
<script setup>


defineProps(['userImage'])

// get image




</script>


<template>
        <span class="userImage">
        <!-- <img  v-if="!userImage" src="@/assets/userImage.png" alt="toggle theme"> -->
        <img src="{userImage}" alt="github image">
        </span>
</template>



<style scoped>
.userImage img{
        width: 100px;
}
</style>
    