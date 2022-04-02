import React from 'react';

class Recordatorio extends React.Component {

  render () {
    return (
      <div className="recordatorio">
        <h4>Seleccion anterior: {this.props.seleccionAnterior.toUpperCase()}</h4>
        <h4>Historial de seleccion anterior</h4>
        <ul>
          {this.props.historial.map((e, index)=> <li key={index.toString()}>{e.toUpperCase()}</li>)}
        </ul> 
      </div>
    )
  }
}

export {Recordatorio};