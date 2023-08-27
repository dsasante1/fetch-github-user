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


let {dataFetched, errorState, isLoading, errorMessage} = storeToRefs(userGithubData)

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
      

      <div v-else-if="isLoading === false && errorState == false">
        
        <div class="UserDetailsCard">
        
        <UserImageComponent :userImage="userGithubData.dataFetched.avatar_url"/>

        <!-- user details -->
        <span class="userDetails">
          <UserNameJoinDetail :userName="userGithubData.dataFetched.name"
             :dateJoined="dataFetched.created_at" 
             :gitHubName="dataFetched.login"/>

          
             <UserBio :userBio="dataFetched.bio" />

            <UserRepoFollowers
           :numberOfRepos="dataFetched.public_repos"
           :numberOfFollowers="dataFetched.followers" 
           :numberOfFollowing="dataFetched.following"/>
          
          <UserLocationSocialMedia 
          :location="dataFetched.location" 
          :twitterUserName="dataFetched.twitter_username"
          :blogUrl="dataFetched.blog"
          :employer="dataFetched.company"/>
        
        
        </span>

          
      </div> 

      <div class="MobileUserDetailsCard">
        
        <div class="MobileUserDetails">
        
          <UserImageComponent :userImage="userGithubData.dataFetched.avatar_url"/>

        <!-- user details -->
        
        
        <UserNameJoinDetail :userName="dataFetched.name"
             :dateJoined="dataFetched.created_at" 
             :gitHubName="dataFetched.login"/>
        </div>
          
        <UserBio :userBio="dataFetched.bio" />

        <UserRepoFollowers
           :numberOfRepos="dataFetched.public_repos"
           :numberOfFollowers="dataFetched.followers" 
           :numberOfFollowing="dataFetched.following"/>
          
          <UserLocationSocialMedia 
          :location="dataFetched.location" 
          :twitterUserName="dataFetched.twitter_username"
          :blogUrl="dataFetched.blog"
          :employer="dataFetched.company"/>
                
    

          
      </div> 

      </div>
      
  </div>

 


</template>

<style scoped>

</style>
