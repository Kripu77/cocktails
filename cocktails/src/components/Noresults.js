import React from 'react'
import Search from './Search';

const Noresults = () => {
    return (
      <section>
        <section className='form'>
          <Search />
        </section>

        <div className="results">
          <h1>
            Unfortunately, we do not have the item that you are looking for.
            Thank you for tunning in.
          </h1>
          <img src="https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png" />
        </div>
      </section>
    );
}

export default Noresults
