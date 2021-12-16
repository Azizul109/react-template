import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Header from "./components/header";
import NewsList from './components/news_list';



import JSON from './db.json';

// const App = () => {
//   // return <h1>Hello world!!!</h1>
//   return (
//     <div>
//       <Header></Header>
//       <News_list_item></News_list_item>
//       <News_list></News_list>
//     </div>
//   );
// }

class App extends Component {

  state = {
    news: JSON
  }

  render() {
    return (
      <div>
        <Header></Header>
        <NewsList news={this.state.news}></NewsList>


      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));