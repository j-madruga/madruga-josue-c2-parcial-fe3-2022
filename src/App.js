import React from 'react';
import {Historia} from './components/Historia';
import {Opciones} from './components/Opciones';
import {Recordatorio} from './components/Recordatorio';
import data from './components/data.json';
import Swal from 'sweetalert2';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      storyId: "1",
      selectedOptions: [],
      previousSelection: "",
      currentStory: data[0],
    };
    this.storys = data;
  };

  componentDidUpdate(prevState) {
    if (prevState.counter !== this.state.counter) {
      this.state.selectedOptions.push(this.state.previousSelection);
    }
  }

  handleClick = (e) => {
    let buttonId = e.target.id;
    let builtStoryId = this.state.counter + 1 + buttonId;
    if (this.state.counter >= 5) {
      Swal.fire({
        title: 'Llegaste al final!',
        text: "Deseas volver a empezar la historia?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si!'
      }).then((result) => {
        if (result.isConfirmed) {
          document.location.replace("index.html");
        } 
        if (!result.isConfirmed) {
          Swal.fire({
            title: 'Volves igual!',
            html: 'gracias! vuelva prontos!',
            timer: 2000,
            timerProgressBar: true,
          }).then( () => {
            setTimeout(document.location.replace('index.html'),1500)
          })
        }
      })
    } else {      
      this.setState(() => ({
          counter: this.state.counter+1,
          storyId: builtStoryId,
          previousSelection: buttonId,
          currentStory: this.storys.find((hist) => hist.id === builtStoryId),
        }))
    }
    };

  render(){
    return (
      <div className="layout">
        <Historia
          currentStory={this.state.currentStory}
        />
        <Opciones
          handleClick={this.handleClick}
            currentStory={this.state.currentStory}
        />
        <Recordatorio
          seleccionAnterior={this.state.previousSelection}
          historial={this.state.selectedOptions}
        />
      </div>
    );
  }
}

export default App;
