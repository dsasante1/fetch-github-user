import axios from 'axios'

export let result;

let query = ""


export let isLoading =  false
export let errorState = false
export let errorMessage = ""





export async function fetchData(userQuery){
    
    if (userQuery !== ""){

        query = (`https://api.github.com/users/${userQuery}`)

        try{

            isLoading = true
            errorState = false

           const datas =  await axios.get(query)
           result = await datas.data
            
        }catch (error){
            errorState = true
            errorMessage = error
        }finally{
            isLoading = false            
        }
  }




}



