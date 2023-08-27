
<script setup>

import { userData } from '@/stores/githubUserData'


const userGithubData = userData()


const {fetchUserData} = userGithubData


</script>


<template>

    <div class="mobile">
        <div class="inputSection">

            <span id="searchItems">
            <img id="magnifyGlass" src="@/assets/search.svg" alt="magnifying glass">
            <input type="text" v-model="userGithubData.userQuery" placeholder="Search User..."/>
            </span>
            <span>
            <!-- <span id="noResult">No results</span> -->
            <button type="submit" class="searchButton" @click="fetchUserData()">Search</button>

            </span>
            </div>
    </div>

    <div class="desktop">
        <div class="inputSection">

        <span>
        <img id="magnifyGlass" src="@/assets/search.svg" alt="magnifying glass">
        <input type="text" v-model="userGithubData.userQuery" placeholder="Search User..."/>
      </span>
      <span>
        <!-- <span id="noResult">No results</span> -->

        <button class="searchButton" @click="fetchUserData">Search</button>
        
      </span>
      </div>

    </div>


</template>



<style scoped>


@media only screen and (min-width: 900px){
.mobile{
        display: none;
    }





input{
    background-color: #211e41;
    border: none;
    padding-left: 30px;
    color:white;
    font-size: larger;
    width: 700px;
}

textarea:focus, input:focus{
    outline: none;
}




.inputSection{
    background-color: #211e41;
    padding: 20px;
    padding-left: 40px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.searchButton{
    background-color: #0079fe;
    color: white;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    padding: 15px;
    cursor: pointer;
    border-style:none;


}


#noResult{
    color: red;
    font-size: medium;
    padding-right: 20px;
    
}

}



@media only screen and (max-width: 900px){
    .desktop{
        display: none;
    }


    #searchItems{
        display: flex;
        align-items: center;
        align-content: center;
    }


    #magnifyGlass{
     width: 20px;
    }

    input{
    background-color: #211e41;
    border: none;
    padding-left: 10px;
    color:white;
    font-size: small;
  
}

textarea:focus, input:focus{
    outline: none;
}


.inputSection{
    background-color: #211e41;
    padding: 10px;
    /* padding-left: 20px; */
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.searchButton{
    background-color: #0079fe;
    color: white;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    border-style:none;

}


#noResult{
    color: red;
    font-size: small;
    padding-right: 10px;
    
}





}


</style>
    