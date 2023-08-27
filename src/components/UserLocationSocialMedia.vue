
<script setup>

defineProps([
    'location',
    'twitterUserName',
    'blogUrl',
    'employer'

])


// const emptyString

</script>


<template>

<div class="urlSection">


    <div class="innerSection">
        <span>

            <div v-if="location">
                <img id="iconImage" src="@/assets/003-pin.svg" alt="location image">
                <span>{{ location }}</span> 
            </div>

            <div v-else>
                <img id="iconImage" src="@/assets/location.svg" alt="location image">
                <span>N/A</span>
            </div>

        </span>



    
        <span>
            <div  v-if="twitterUserName">
                <img id="iconImage" src="@/assets/Path.svg" alt="twitter image">
                <span>{{ twitterUserName }}</span> 
            </div>
            <div v-else>
                <img id="iconImage" src="@/assets/twitter.svg" alt="twitter image">
                <span>N/A</span> 

            </div>

            
        </span>

    </div>
    

    <div  class="innerSection">

    <span>

        <div v-if="blogUrl">
            
            <img id="iconImage" src="@/assets/002-url.svg" alt="url image">
            <span>{{ blogUrl }}</span> 
        </div>
       

        <div v-else>
            <img id="iconImage" src="@/assets/url.svg" alt="office image">
            <span>N/A</span> 
        </div>


    </span>

    <span>
        <div v-if="employer">
            <img id="iconImage" src="@/assets/001-office-building.svg" alt="office image">
            <span>{{ employer }}</span> 
            

        </div>

        <div v-else>
            <img id="iconImage" src="@/assets/office.svg" alt="office image">
            <span>N/A</span> 
            
        </div>
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
    color: white
}



@media only screen and (max-width: 500px){

    .innerSection{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    color:white
}





}





</style>
    