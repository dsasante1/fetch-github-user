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

import { storeToRefs } from 'pinia';

import { userData } from '@/stores/githubUserData'


let userGithubData = userData()


let {result, errorState, isLoading, errorMessage} = storeToRefs(userGithubData)

</script>

<template>
  <div class="body">
      <nav>
        <span class="title">devfinder</span>
        <span  id="toggle">
          <span class="subTitle">LIGHT</span>
          <img id="toggleTheme" src="@/assets/moon.svg" alt="toggle theme"> 
        </span>

      </nav>

      <SearchComponent  />
      
      <div v-if="isLoading">
        <LoadingComponent />
      </div>
      
      <div v-else-if="errorState">
        <ErrorComponent :errorMessage="errorMessage"/>
      </div>
      

      <!-- <div v-else-if="isLoading === false && errorState == false"> -->
        
        <div class="UserDetailsCard">
        
        <UserImageComponent :userImage="result[3]"/>

        <!-- user details -->
        <span class="userDetails">
          <UserNameJoinDetail :userName="result[0]"
             :dateJoined="result[2]" 
             :gitHubName="result[1]"/>

          
             <UserBio :userBio="result[4]" />

             <UserRepoFollowers
           :numberOfRepos="result[5]"
           :numberOfFollowers="result[6]" 
           :numberOfFollowing="result[7]"/>
          
          <UserLocationSocialMedia 
          :location="result[8]" 
          :twitterUserName="result[9]"
          :blogUrl="result[10]"
          :employer="result[11]"/>
        
        
        </span>

          
      </div> 

      <div class="MobileUserDetailsCard">
        
        <div class="MobileUserDetails">
        
          <UserImageComponent :userImage="result[3]"/>

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

      


  
  
  <!-- </div> -->


</template>

<style scoped>

</style>
