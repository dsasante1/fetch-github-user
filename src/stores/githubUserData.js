 
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const userData = defineStore('githubData', () => {


    const userQuery = ref("")

    const results = ref({})

    const userName = ref("")
    const userLogin = ref("")
    const userImage = ref("") 
    const userDate = ref("")
    const userBio = ref("")
    const userRepo = ref(0)
    const userFollowers = ref(0)
    const userFollowing = ref(0)
    const userLocation = ref("")
    const userTwitter = ref("")
    const userUrl = ref("")
    const userCompany = ref("")

    // const info = ref(null)
    const isLoading =  ref(true)
    const errorState = ref(false)



    
  async function fetchUserData(){
    
    if (userQuery.value !== ""){

        const query = ref(`https://api.github.com/users/${userQuery.value}`)

        try{
            await axios.get(query.value)
            .then((data) => {

                
                results.value = [
                userName.value =  data.data.name, 
                userLogin.value =  data.data.login, 
                userImage.value =  data.data.avatar_url , 
                userDate.value =  data.data.created_at, 
                userBio.value =  data.data.bio, 
                userRepo.value = data.data.public_repos, 
                userFollowers.value =  data.data.followers,
                userFollowing.value =  data.data.following, 
                userLocation.value =  data.data.location, 
                userTwitter.value =  data.data.twitter_username,
                userUrl.value =  data.data.url,
                userCompany.value =  data.data.company
                ]

              
            });
        }catch (error){
            console.log(error)
            errorState.value = true
        }finally{
            isLoading.value = false
        }
  }




}
 
  
    

  return {
     userQuery, 
     fetchUserData,
     isLoading,
     errorState,
    //  userName, userLogin, userImage,
    //  userDate,
    //  userBio, userRepo,
    //  userFollowers, userFollowing, userLocation,
    //  userTwitter, userUrl, userCompany,
    
    results
    }
})
