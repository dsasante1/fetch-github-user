
<script setup></script>


<template>
        <div class="inputSection">

        <span>
        <img id="magnifyGlass" src="@/assets/search.svg" alt="magnifying glass">
        <input type="text" placeholder="Search User..."/>
      </span>
      <span>
        <span id="noResult">No results</span>
        <span class="searchButton">Search</span>
        

      </span>
        

     
        


      </div>


</template>



<style scoped>

input{
    background-color: #211e41;
    border: none;
    padding-left: 30px;
    color:white;
    font-size: larger;
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
    background-color: #6787ff;
    color: white;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 30px;
    padding: 15px;

}


#noResult{
    color: red;
    font-size: medium;
    padding-right: 20px;
    
}


</style>
    