import React, { Component } from "react";

class Puntuar extends Component {
  render() {
    let date = new Date()
    let options = { timeZone: 'UTC', timeZoneName: 'short' }
    console.log()
    return (
      <div>
        <h2>Puntuación</h2>
        <h3>Fecha: {date.toLocaleDateString('es-ES', options)}</h3>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}

export default Puntuar;