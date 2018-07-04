/* global window,document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
import TimeSelector from './slider.js';
//import { settings } from 'cluster';

import {csv as requestCsv} from 'd3-request';

// Set your mapbox token here
const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
const COMdata = [{"hgt": 39.770358, "coords": [40.992166999999995, 21624.06065]}, 
                  {"hgt": 28.95, "coords": [40.209858000000004, 23016.62272]}, 
                  {"hgt": 26.946469, "coords": [39.586553, 6409.472186]}, 
                  {"hgt": 38.389119, "coords": [40.916769, 10641.01734]}];
// export MapboxAccessToken=pk.eyJ1IjoidGFjdm9sa2FuIiwiYSI6ImNqaWJvczBmaTBkenQza253cG5obTF3dGQifQ.g0QD2OpmfdZMOEBLTKX0-Q

// Source data CSV
const DATA_URL = "./data/baseIn.csv"; // eslint-disable-line

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 500,
        height: 500
      },
      data: null,
      settings: {
        hour: 1
      }
    };



// [Number(d.lng), Number(d.lat)]
// [Number(d.lng), Number(d.lat), Number(d.length)]

requestCsv(DATA_URL, (error, response) => {
  if (!error) {
    console.log('response', response)
    const data = response.map(d => [Number(d.lng), Number(d.lat), Number(d.length)]);
    console.log('data', data[0]);
    console.log('COMdata', COMdata);
    this.setState({data});
  }
});
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  _updateSettings(settings) {
    this.setState({
      settings: {...this.state.settings, ...settings}
    });

      
  }

  render() {
    const {viewport, data, settings} = this.state;

    return (

      <div>
        <div id="control-panel"> 
		    <div style={{textAlign: 'center', padding: '5px 0 5px'}}>
              <h1>Control Panel</h1>
			  <hr />
			  <TimeSelector settings={settings} onChange={(e) => this._updateSettings(e)}/>
			  
		    </div>  
          </div>
		    <MapGL
		  	{...viewport}
			  mapStyle="mapbox://styles/mapbox/dark-v9"
		  	onViewportChange={this._onViewportChange.bind(this)}
			  mapboxApiAccessToken={MAPBOX_TOKEN}>
		  	<DeckGLOverlay viewport={viewport} data={data || []} />
		    </MapGL>

		  </div>

    );
  }
}

render(<Root />, document.body.appendChild(document.createElement('div')));

