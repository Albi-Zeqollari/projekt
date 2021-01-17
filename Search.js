import axios from "axios";
export default class Search{

  constructor(query){


    this.query=query;
  }

async getResult(){


const options = {
  method: 'GET',
  url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${this.query}`,
  headers: {
    'x-rapidapi-key': 'c334f9f199mshdb0a764648f4eadp19bb57jsn0833f469daf3',
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
  }
};


try{
  const res=await axios(options);
  this.result=res.data;
 //console.log(this.result);
  
    }
    catch(error){

      alert(error)
    }

  }
}

