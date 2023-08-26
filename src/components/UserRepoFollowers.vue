
<script setup>
defineProps([

    'numberOfRepos',
    'numberOfFollowers',
    'numberOfFollowing',
    

])</script>

<template>

    <div>
        
        <span class="innerContent">
        <h2>Repos</h2>
        <span id="repoDetails">{{ numberOfRepos }}</span>

        </span>
        
        <span class="innerContent">
        <h2>Followers</h2>
        <span id="repoDetails">{{ numberOfFollowers }}</span>

        </span>

        <span class="innerContent">
        <h2>Following</h2>
        <span id="repoDetails">{{ numberOfFollowing }}</span>

        </span>

    </div>
    
</template>


<style scoped>

div{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    background-color: #17182c;
    padding: 15px;
    border-radius: 10px;
}


.innerContent{
    display: flex;
    flex-direction: column;    
    color: white;
    gap: 10px;
    align-items: center;
}


#repoDetails{
    color: white;
}


</style>
    