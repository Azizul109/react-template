import React, { Component } from 'react';
import '../css/styles.css';

// const user = {
//     name: 'Francis',
//     lastname: 'jones',
//     age: 16
// }

// const Header = () => {
//     return (
//         <div>
//             <h1>I am coming from header!!!</h1>
//             <h3>my name is {user.name}, lastname is {user.lastname}, age is {user.age}</h3>
//         </div>
//     );
// };

// export default Header;



class Header extends Component {

    //state version....new
    state = {
        keywords: ''
    }

    //eita korle bind korte hobe....jeitar dorkar nai
    // inputChangeHandler(event) {
    //     // console.log(event.target.value)
    //     this.setState({
    //         keywords: event.target.value
    //     })
    // }

    //older version
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         keywords: 'Hello'
    //     }
    // }

    inputChangeHandler = (event) => {
        // console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }


    render() {
        // console.log(this.state.keywords)

        return (
            <header>
                <div className='logo'>Logo</div>
                {/* <input type='text' onChange={this.inputChangeHandler.bind(this)}></input> */}
                <input type='text' onChange={this.inputChangeHandler}></input>
            </header>
        );
    }
}

export default Header;