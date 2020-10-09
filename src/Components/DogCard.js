import React from "react";

class DogCard extends React.Component {
    state = {
        bark: false,
        id: this.props.dog.id
    }

    barkHandler = () => {
        this.setState(prevState => {
            return {
                bark: !prevState.bark
            }
        })
    }
    render() {
        return (
            <div className="card">
            <span className="content">
                <h2 >{this.props.dog.name}</h2>
                <img alt="" src={this.props.dog.img} onClick={ () => this.props.favoriteHandler(this.props.dog.id)}/>
                {this.props.noDeleteButton ? null : <button onClick={() => this.props.removeHandler(this.state.id)}>Delete</button> }
            </span>
            <span className="bark">
                { this.props.noBarkButton ? null :
                    <button onClick={this.barkHandler}>Bark</button>
                }
            </span>
            <span>
                {this.state.bark ? 
                    <img src="https://www.iconsdb.com/icons/preview/black/barking-dog-xxl.png" alt="barking dog icon"/> :
                    null
                }
            </span>
            </div>
        );
    }
}

export default DogCard;
