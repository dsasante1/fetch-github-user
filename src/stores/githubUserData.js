 
import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const userData = defineStore('githubData', () => {


    const userQuery = ref("")

    let dataFetched = ref({});

    const isLoading =  ref(false)
    const errorState = ref(false)
    const errorMessage = ref("")

    const query = ref("")





  async function fetchUserData(){
   
    if (userQuery.value !== ""){

        query.value = (`https://api.github.com/users/${userQuery.value}`)


        try{

            isLoading.value = true
            errorState.value = false

           await axios.get(query.value).then((data) =>  {

            dataFetched.value = data.data
                            
            });
        }catch (error){
            
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
    dataFetched
    }
})
