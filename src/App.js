import React, { Component } from 'react';
import './App.css';

const omdbKey = process.env.REACT_APP_OMDB_API_KEY;

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      search: 'Star Wars',
      loading: false
    };
  }

  componentDidMount() {
    this.loadSearch(this.state.search);
  }

  async loadSearch(search) {
    this.setState({ loading: true });
    const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${omdbKey}`);
    const body = await response.json();
    console.log('search', search);
    console.log('response', response);
    console.log('body', body);
    this.setState({
      items: body.Search,
      loading: false
    });
  }
  
  changeSearch(search) {
    this.setState({ search }, () => {
      this.loadResource(search);
    });
  }
  
  
  render() {
    const { search, items, loading } = this.state;
    const choices = ['Title', 'Year'];
    console.log('items', items[0]);
      
    const list = (
      <ul>
        {items.map(film => <li key={film.Title}>{film.Title}</li>)}
      </ul>
    );

    const load = <div>loading...</div>;

    return (
      // <p>hi</p>
      <section>
        {choices.map(choice => {
          return <button key={choice} disabled={choice === search}
            onClick={() => this.changeSearch(choice)}
          >
            {choice}
          </button>;
        })}
        <div>{items.length} {search}</div>
        {loading ? load : list}
      </section>
    );
      
    
  }
}

export default App;
