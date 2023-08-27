 
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const userData = defineStore('githubData', () => {


    const userQuery = ref("")

    const result = ref([])

    const isLoading =  ref(false)
    const errorState = ref(false)
    const errorMessage = ref("")

    const query = ref("")





  async function fetchUserData(){
    console.log(userQuery.value)
    if (userQuery.value !== ""){

        query.value = (`https://api.github.com/users/${userQuery.value}`)


        try{

            isLoading.value = true
            errorState.value = false

           await axios.get(query.value).then((data) =>  {
                
                result.value.push(data.data.name), 
                result.value.push(data.data.login), 
                result.value.push(data.data.created_at),
                result.value.push(data.data.avatar_url +".jpg") , 
                result.value.push(data.data.bio), 
                result.value.push(data.data.public_repos), 
                result.value.push(data.data.followers),
                result.value.push(data.data.following), 
                result.value.push(data.data.location), 
                result.value.push(data.data.twitter_username),
                result.value.push(data.data.url),
                result.value.push(data.data.company)

                console.log(result.value)
                
            });
        }catch (error){
            // console.log(error)
            errorState.value = true
            errorMessage.value = error
        }finally{
            isLoading.value = false
            userQuery.value = ""
            
        }
  }


}   





  return {
     userQuery, 
     fetchUserData,
     isLoading,
     errorState,
     errorMessage,
    result,
    //  userName, userLogin, userImage,
    //  userDate,
    //  userBio, userRepo,
    //  userFollowers, userFollowing, userLocation,
    //  userTwitter, userUrl, userCompany,

    }
})
