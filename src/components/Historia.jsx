import React from "react";

const Historia = (props) => {
  return (
    // <h2 className="historia">prueba</h2>
    // <>
      <h2 className="historia">
        {props.currentStory.historia}
      </h2>
    //   <Opciones
    //   historia={data.filter((hist) => hist.id === this.state.storyId)[0]}
    //   handleClick={(e) => this.handleClick(e)}
    //   />
    //   <Recordatorio />
    // </>
  );
};

export { Historia };
