import React from 'react'

class AddDog extends React.Component {
    state = {
        name: "",
        img: "",
        breed: "",
        favorite: false
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <div>
                <h1>Add New Dog</h1>
                <form onSubmit={this.localSubmitHandler}>
                    <input name="name" type="text" placeholder="Dog Name" value={this.state.name} onChange={this.changeHandler}></input>
                    <input name="img" type="text" placeholder="Dog Image URL" value={this.state.img} onChange={this.changeHandler}></input>
                    <input name="breed" type="text" placeholder="Dog Breed" value={this.state.breed} onChange={this.changeHandler}></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddDog