
<script setup>
defineProps([

    'numberOfRepos',
    'numberOfFollowers',
    'numberOfFollowing',
    

])</script>

<template>

    <div>
        
        <span class="innerContent">
        <span class="title">Repos</span>
        <span id="repoDetails">{{ numberOfRepos }}</span>

        </span>
        
        <span class="innerContent">
        <span class="title">Followers</span>
        <span id="repoDetails">{{ numberOfFollowers }}</span>

        </span>

        <span class="innerContent">
        <span class="title">Following</span>
        <span id="repoDetails">{{ numberOfFollowing }}</span>

        </span>

    </div>
    
</template>


<style scoped>
.title{
    font-size: 20px;
}


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


@media only screen and (max-width: 900px){
    .title{
        font-size: 15px;
    }



    
}

</style>
    