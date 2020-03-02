import React, { Component } from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




      






class App extends Component {	
  render() {
    const options = {
      title: {
        text: "Julio's monthly budget"
      },
      data: [{				
                type: "pie",
                dataPoints: [
                    { label: "Food",  y: 100  },
                    { label: "Clothes", y: 15  },
                    { label: "Rent", y: 25  },
                    { label: "Gas",  y: 30  },
                    { label: "Misc.",  y: 28  }
                ]
       }]
   }
		
   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default App;
