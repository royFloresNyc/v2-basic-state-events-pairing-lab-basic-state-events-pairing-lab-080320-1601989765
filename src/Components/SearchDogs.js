import React, { Component } from 'react'

const SearchDogs = (props) => {
    return <div className="search-bar">
        <h1>Search for a Dog</h1>
            <form>
                <input 
                    type="text" 
                    placeholder="Enter Dog Name"
                    searchVal={props.searchVal}
                    onChange={(e) => props.changeHandler(e.target.value)}
                ></input>
            </form>
        </div>
}

export { SearchDogs }