export const getInput = () => document.querySelector('.form-control').value;

export const clearInput = () => document.querySelector('.form-control').value="";


export const clearResult = () => document.querySelector('.results__data').innerHTML='';


const renderMovie = (datas) =>{


    const markup = `

    <li>
    
        
    <h4 class="results__title">${datas.title}</h4>
     
    <img src="${datas.poster}" class="results__fig" alt="This movie has no image">
    
    <p class="results__plot">${datas.plot}</p>

    <h4 class="rate">Rating:${datas.rating}</h4><br>

    <h4 class="length">Length:${datas.length}</h4><br>

    <h4 class="year">Year:${datas.year}</h4><br>
  
    <a class="link" href="${datas.trailer.link}">Click here to watch the trailer</a>  
 
  
     </li>

    
    
    `;
    document.querySelector('.results__data').insertAdjacentHTML('beforeend',markup);
}



export const renderResult = data =>{

    
   renderMovie(data);
    
}