<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import UserLocationSocialMedia from './components/UserLocationSocialMedia.vue'
import UserNameJoinDetail from './components/UserNameJoinDetail.vue'
import UserBio from './components/UserBio.vue';
import UserRepoFollowers from './components/UserRepoFollowers.vue';


</script>

<template>
  <div class="body">
      <nav>
        <span class="textColor">devfinder</span>
        <span class="textColor" id="toggle">
          LIGHT
          <img id="toggleTheme" src="@/assets/moon.svg" alt="toggle theme"> 
        </span>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>

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

      <div class="UserDetailsCard">
        
        <!-- insert image -->

        <span class="userImage">
          <img id="toggleTheme" src="@/assets/userImage.png" alt="toggle theme">
        </span>

        <!-- user details -->
        <span class="userDetails">
          <UserNameJoinDetail userName="john" dateJoined="25 Jan 2011" gitHubName="good_programmer"/>
          
          <UserBio userBio="
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Donec odio. Quisque volutpat 
            mattis eros.
            "
          />

          <UserRepoFollowers numberOfRepos="30"  numberOfFollowers="400" numberOfFollowing="200"/>
          
          <UserLocationSocialMedia location="accra" twitterUserName="kofi ghana" blogUrl="ghaha.com" employer="BBC"/>
        
        </span>

          
      </div> 


  <!-- <RouterView /> -->
  </div>
</template>

<style scoped>

</style>
