import React from 'react';

class Opciones extends React.Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button
            id="a"
            className="botones"
            onClick={this.props.handleClick}
          >
          A
          </button>
          <h4>{this.props.currentStory.opciones.a}</h4>
        </div>
        <div className="opcion">
          <button 
            id="b"
            className="botones"
            onClick={this.props.handleClick}
          >
            B
          </button>
          <h4>{this.props.currentStory.opciones.b}</h4>
        </div>
      </div>
    )
  }
}

export {Opciones};