
<script setup>

defineProps([
    'location',
    'twitterUserName',
    'blogUrl',
    'employer'

])

</script>


<template>

<div class="urlSection">


    <div class="innerSection">
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
    

    <div  class="innerSection">

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

</div>

</template>


<style scoped>

#iconImage{
    padding-right: 20px;
    
}

.urlSection{
    display:flex;
    flex-direction: column;
    gap: 10px;
    
}

.innerSection{
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
}



@media only screen and (max-width: 500px){

    .innerSection{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}





}





</style>
    