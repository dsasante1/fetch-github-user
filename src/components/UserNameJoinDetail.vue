
<script setup>

import {ref} from 'vue'
import moment from 'moment'


const userDetails = defineProps([
    'userName',
    'dateJoined',
    'gitHubName',
])


let newDate = ref("")
let displayDate = ref("")



if(userDetails.dateJoined !== undefined){
    newDate.value = new Date(userDetails.dateJoined.split("T")[0])

    displayDate.value =  moment(newDate.value).format("D MMM YYYY")
    

}




</script>

<template>
    <div class="desktop">
        
        <span>
        <h1>{{ userName }}</h1>
        <span id="gitId">{{ gitHubName }}</span>

        </span>
        
        <span>Joined: {{ displayDate }}</span>
    </div>


    <div class="mobile">
        
        <div>
            <span>
                <h1>{{ userName }}</h1>
                <span id="gitId">{{ gitHubName }}</span>
            </span>
            <span>Joined: {{ displayDate }}</span>
        </div>
        

        
    </div>
    
</template>


<style scoped>

@media only screen and (min-width: 900px){

    .mobile{
        display: none;
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: white;
        gap: 50px;
    }


    #gitId{
        color: rgb(71, 71, 235);
    }

}

@media only screen and (max-width: 900px){

    .desktop{
        display: none;

    }

    div{
        display: flex;
        flex-direction: column;      
        color: white;
        gap: 15px;
    }


}



</style>
    