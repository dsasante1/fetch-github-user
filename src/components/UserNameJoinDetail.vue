
<script setup>

defineProps([
    'userName',
    'dateJoined',
    'gitHubName',
])



</script>

<template>
    <div class="desktop">
        
        <span>
        <h1>{{ userName }}</h1>
        <span id="gitId">{{ gitHubName }}</span>

        </span>
        
        <span>Joined {{ dateJoined }}</span>
    </div>


    <div class="mobile">
        
        <div>
            <span>
                <h1>{{ userName }}</h1>
                <span id="gitId">{{ gitHubName }}</span>
            </span>
            <span>Joined {{ dateJoined }}</span>
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
    