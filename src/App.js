import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
    const apikey = '160ce09120f14e4b8db18928719d2c07'
    const url = 'https://newsapi.org/v2/top-headlines'
    const urlTotal = `${url}?country=mx&category=${categoria}&apiKey=${apikey}`

    const respuesta = await fetch(urlTotal);
    const noticias = await respuesta.json();

    console.log(noticias.articles);

    this.setState({
      noticias: noticias.articles
    })
  }

  render() {
    return (
      <Fragment>
        <Header titulo="Noticas React API"/>
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias= {this.consultarNoticias} />
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
