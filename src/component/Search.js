import React, { useState } from 'react'
import Scroll from './Scroll';



function Search({details}) {
    const[SearchField, setsearchField]= useState("");
    const filteredPersons = details.filter(
        item => {
            return(
                item.tittle.toLowerCase().includes(SearchField.toLowerCase())
            );
        }

    );

    const handleChange = e =>{
        setsearchField(e.target.value);
    };
    function Movies(){
        return(
            <scroll>
                <Movies filteredPersons = {filteredPersons}/>
            </scroll>
        );
    }


  return (
    <section className='garamond'>
        <div>
        <input className='pa3 bb br3 grow b--none gb-light-blue ma3' type='search' placeholder='seach movies' onChange={handleChange}/>
        </div>
        {Movies}
    </section>
   
  )
}

export default Search