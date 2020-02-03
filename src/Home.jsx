import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/maps")
      .then(res => res.json())
      .then((result) => {
        this.setState({isLoaded: true, items: result});
      },
      // Nota: É importante lidar com os erros aqui em vez de um bloco catch() para
      // não recebermos exceções de erros dos componentes.
      (error) => {
        this.setState({isLoaded: true, error});
      })
  }

  render() {
    const {error, isLoaded, items} = this.state;
    const itensRender = [];
    items.forEach(element => {
      let to = '/Map?id=' + element._id;
      itensRender.push(<Link to={to}> {element.Created_date} </Link>)
    })
    
    if (error) 
      return <div>Error: {error.message}</div>;
    else if (!isLoaded) 
      return <div>Loading...</div>;
    else if (items)
      return (
      <div className='Home'>
          {itensRender}
      </div>)
    else
      return (
        <div className='Home'>
          <h1>Roteirizador</h1>
          <div className='historico'>
            <h2>ola</h2>
          </div>
        </div>

      )
  }
}

export default Home