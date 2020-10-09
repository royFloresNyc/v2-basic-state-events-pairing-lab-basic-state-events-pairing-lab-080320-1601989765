import React, { Component } from "react";
import DogCard from '../Components/DogCard'
import AddDog from '../Components/AddDog'
import { SearchDogs } from '../Components/SearchDogs'

class DogList extends Component {
    
    renderDogs = () => {
        return this.props.dogList.map( dogObj => <DogCard 
            key={dogObj.id} 
            dog={dogObj} 
            favoriteHandler={this.props.favoriteHandler}
            removeHandler={this.props.removeHandler}
            />)
    }

    render() {
        return <div className="content">
            <AddDog submitHandler={this.props.submitHandler}/>
            <br/>
            <SearchDogs searchVal={this.props.searchVal} changeHandler={this.props.changeHandler}/>
            <div className="list">
                {this.renderDogs()}
            </div>
        </div>
    }
}

export default DogList;
