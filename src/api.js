import axios from 'axios';
// bu fonksiyonda foto çekme apisine istek atıyorzu
const searchImages= async(term)=>{
 const response= await axios.get('https://api.unsplash.com/search/photos',{
  headers:{
    Authorization:'Client-ID OTAyUl1pylhBRHAA6ehaT5Rn0zGB0NzM5Of10kOynUg',
  },
  params:{
    query:term,
  },
});
return response.data.results;
 };

 export default searchImages;