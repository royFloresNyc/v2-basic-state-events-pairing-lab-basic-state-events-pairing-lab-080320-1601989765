import React, { Component } from "react";
import "./App.css";
import DogList from './Containers/DogsList'
import FavoriteList from './Containers/FavoriteList'

class App extends Component {
    state = {
        dogList: [],
        searchVal: ""
    }

    componentDidMount() {
        fetch('http://localhost:4001/apiResponse')
            .then(resp => resp.json())
            .then(data => {
                this.setState({dogList: data})
        })
    }

    favoriteHandler = (dogId) => {
        const newDogArray = [...this.state.dogList]
        const favoritedDog = newDogArray.find(dog => dog.id === dogId)
        favoritedDog.favorite = !favoritedDog.favorite
        this.setState(() => {
            return {dogList: newDogArray}
        }, this.updateDog(favoritedDog))
    }

    updateDog = (obj) => {
        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(obj)
        }
        fetch('http://localhost:4001/apiResponse/' + obj.id, options)
    }


    getFavoriteDogs = () =>{
        return this.state.dogList.filter(dog => dog.favorite)
    }

    addDog = (dogObj) =>{
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(dogObj)
        }
        fetch('http://localhost:4001/apiResponse/', options)
            .then(resp => resp.json())
            .then(data => {
                this.setState(prevState => {
                    return {
                        dogList: [data, ...prevState.dogList]
                    }
                })
            })
    }

    removeDog = (dogId) => {
        fetch('http://localhost:4001/apiResponse/' + dogId, {method: "DELETE"})
            .then(resp => resp.json())
            .then(data => {

                this.setState(() => {
                    const newDogArray = this.state.dogList.filter(dog => dog.id !== dogId)
                    return {
                        dogList: newDogArray
                    }
                })
            })
    }

    changeHandler = (input) => {
        this.setState({searchVal: input})
    }

    filterDogs = () => {
        return this.state.dogList.filter(dog => dog.name.toLowerCase().includes(this.state.searchVal.toLowerCase()))
    }

    render() {
        return (
            <div className="app">
            <DogList 
                dogList= {this.filterDogs()} 
                favoriteHandler={this.favoriteHandler} 
                submitHandler={this.addDog}
                removeHandler={this.removeDog}
                searchVal={this.state.searchVal}
                changeHandler={this.changeHandler}
                />
            <FavoriteList favoriteDogs={this.getFavoriteDogs()} favoriteHandler={this.favoriteHandler}/>
        </div>
    );
  }
}

export default App;
