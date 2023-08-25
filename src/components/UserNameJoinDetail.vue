
<script setup>
defineProps([
    'userName',
    'dateJoined',
    'gitHubName',
    

])</script>

<template>
    <div>
        
        <span>
        <h1>{{ userName }}</h1>
        <span id="gitId">{{ gitHubName }}</span>

        </span>
        
        <span>Joined {{ dateJoined }}</span>
    </div>
    
</template>


<style scoped>

div{
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: white;
}


#gitId{
    color: rgb(71, 71, 235);
}


</style>
    