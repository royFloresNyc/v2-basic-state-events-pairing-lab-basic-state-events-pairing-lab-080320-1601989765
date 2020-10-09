import React, {Component} from 'react'
import DogCard from '../Components/DogCard'

class FavoriteList extends Component {

    renderFavDogs = () => {
        return this.props.favoriteDogs.map( dogObj => <DogCard 
            key={dogObj.id} 
            dog={dogObj} 
            favoriteHandler={this.props.favoriteHandler}
            noDeleteButton
            noBarkButton/>)
    }

    render() {
        return (<div className="content">
            <h1>Favorites</h1>
            {this.props.favoriteDogs ? this.renderFavDogs() : null}
        </div>)
    }

}

export default FavoriteList