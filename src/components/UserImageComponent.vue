
<script setup>

import { ref } from 'vue';


const githubAvatar = defineProps(['userImage'])


if (githubAvatar.userImage !== undefined){

        const userAvatar = ref("")

        userAvatar.value = `${githubAvatar.userImage}`
        console.log(userAvatar.value)

}






// get image




</script>


<template>
        <span class="userImage">
        <!-- <img  v-if="!userImage" src="@/assets/userImage.png" alt="toggle theme"> -->
        <img :src="{userImage}" alt="github image">
        </span>
</template>



<style scoped>


@media only screen and (max-width: 900px){

.userImage img{
        width: 100px;
}

}



@media only screen and (min-width: 900px){
.userImage img{
        width: 200px;
}
}



</style>
    