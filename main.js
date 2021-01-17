import Search from './module/Search'
import * as searchView from './views/Searchview'

const state ={};


const controlSearch =  async () =>{


    const query=searchView.getInput();

    // console.log(query)


    if(query){


        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResult();

        await state.search.getResult();

        searchView.renderResult(state.search.result)

    }


}

document.querySelector('.container-fluid').addEventListener('submit', e =>{


    e.preventDefault();
    controlSearch();

})



