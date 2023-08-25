<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import UserLocationSocialMedia from './components/UserLocationSocialMedia.vue'
import UserNameJoinDetail from './components/UserNameJoinDetail.vue'


</script>

<template>
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

        <img id="magnifyGlass" src="@/assets/search.svg" alt="magnifying glass">
        <input type="text" placeholder="Search User..."/>
        <span class="searchButton">Search</span>


      </div>

      <div class="mainBody">
        
        <!-- insert image -->

        <span class="userImage">
          <img id="toggleTheme" src="@/assets/userImage.png" alt="toggle theme">
        </span>

        <!-- user details -->
        <span class="userDetails">
          <UserNameJoinDetail userName="john" dateJoined="25 Jan 2011" gitHubName="good_programmer"/>
          
          <span>
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Donec odio. Quisque volutpat 
            mattis eros.
          </span>
          
          <UserLocationSocialMedia location="accra" twitterUserName="kofi ghana" blogUrl="ghaha.com" employer="BBC"/>
        
        </span>

          
      </div>


  <!-- <RouterView /> -->

</template>

<style scoped>

</style>
