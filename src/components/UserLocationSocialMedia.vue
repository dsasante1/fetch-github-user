
<script setup>

defineProps({
    location,
    twitterUserName,
    blogUrl,
    employer

})

</script>


<template>

<div>

<span>
    <img id="iconImage" src="@/assets/location.svg" alt="icon image">
    <img id="iconImage" src="@/assets/003-pin.svg" alt="icon image">
    <span>{{ location }}</span> 
</span>

<span>
    <img id="iconImage" src="@/assets/twitter.svg" alt="icon image">
    <img id="iconImage" src="@/assets/Path.svg" alt="icon image">
    <span>{{ twitterUserName }}</span> 
</span>

</div>

<div>

<span>
    <img id="iconImage" src="@/assets/url.svg" alt="icon image">
    <img id="iconImage" src="@/assets/002-url.svg" alt="icon image">
    <span>{{ blogUrl }}</span> 
</span>

<span>
    <img id="iconImage" src="@/assets/office.svg" alt="icon image">
    <span>{{ employer }}</span> 
</span>

</div>

</template>


<style scoped>

#iconImage{
    
}

</style>
    