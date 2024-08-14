 import axios from "axios";
const API_KEYS= import.meta.env.VITE_YOUTUBE_API_KEYS;
const BASE_URL="https://youtube138.p.rapidapi.com"
 const options = {
	
	headers: {
		'x-rapidapi-key': API_KEYS,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
}; 
 export const fetchData = async(url)=>{
    try{
        // eslint-disable-next-line no-undef
        const {data}= await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    } catch (error){
          console.error("error fetching api data:",error);
           throw error;
    }
 }
