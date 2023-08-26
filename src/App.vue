<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import UserLocationSocialMedia from './components/UserLocationSocialMedia.vue'
import UserNameJoinDetail from './components/UserNameJoinDetail.vue'
import UserBio from './components/UserBio.vue';
import UserRepoFollowers from './components/UserRepoFollowers.vue';
import SearchComponent from './components/SearchComponent.vue';
import UserImageComponent from './components/UserImageComponent.vue';
import LoadingComponent from './components/LoadingComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';

import { userData } from '@/stores/githubUserData'


const userGithubData = userData()


const {result, errorState, isLoading, errorMessage} = userGithubData

</script>

<template>
  <div class="body">
      <nav>
        <span class="title">devfinder</span>
        <span  id="toggle">
          <span class="subTitle">LIGHT</span>
          <img id="toggleTheme" src="@/assets/moon.svg" alt="toggle theme"> 
        </span>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>

      <SearchComponent  />
      
      <div v-if="isLoading === true">
        <LoadingComponent />
      </div>
      
      <div v-if="errorState === true">
        <ErrorComponent :errorMessage="errorMessage"/>
      </div>
      

      <div v-if="isLoading === false && errorState == false">
        <div class="UserDetailsCard">
        
        <UserImageComponent :/>

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

      <div class="MobileUserDetailsCard">
        
        <div class="MobileUserDetails">
        
            <UserImageComponent />

        <!-- user details -->
        
        
            <UserNameJoinDetail :userName="result[0]"
             :dateJoined="result[2]" 
             :gitHubName="result[1]"/>

        </div>
          
          <UserBio :userBio="result[4]"
          />

          <UserRepoFollowers
           :numberOfRepos="result[5]"
           :numberOfFollowers="result[6]" 
           :numberOfFollowing="result[7]"/>
          
          <UserLocationSocialMedia 
          :location="result[8]" 
          :twitterUserName="result[9]"
          :blogUrl="result[10]"
          :employer="result[11]"/>
        
    

          
      </div> 

      </div>

      

  <!-- <RouterView /> -->
  </div>
</template>

<style scoped>

</style>
