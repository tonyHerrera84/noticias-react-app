import React, {Component} from 'react';

class Formulario extends Component {
    state = {}
    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra noticias por categoría</h2>
                        <div className="input-field col s12 m8">
                            <select>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;  