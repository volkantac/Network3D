/* global window,document */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
import TimeSelector from './slider.js';

import {csv as requestCsv} from 'd3-request';

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
        hour: 12,
        extruded: true,
      }
    };

    const DATA_URL = "./data/COORdata.csv";
    requestCsv(DATA_URL, (error, response) => {
      if (!error) {
        //console.log('response', response)
        const data = response.map(d => [Number(d.lng), Number(d.lat), Number(d.hgt), Number(d.hour), String(d.sector), String(d.district)]);
        //console.log('data', data);
        this.setState({data});
      }
    });

  }

  componentDidMount() {
 
  }

  _onViewportChange(viewport) {
    this.setState({
      viewport: {...this.state.viewport, ...viewport}
    });
  }

  _updateSettings(settings) {
    this.setState({
      settings: {...this.state.settings, ...settings},
    });
  }

  updateExtruded(){ 
    const newSettings = {...this.state.settings, extruded: !this.state.settings.extruded}
    // console.info('newSettings :: ', newSettings)
    this.setState({
    settings: {...this.state.settings, extruded: !this.state.settings.extruded}
    })
  }
    
  render() {
    const {data, settings} = this.state;
    const {extruded} = settings
    const filteredData = (this.state.data || []).filter(entry => entry[3] === parseInt(settings.hour, 10))
    console.info('app render')

    return (

      <div>
        <div id="control-panel" className="styles.style" class ="box"> 
		              
        <TimeSelector settings={settings} onChange={(e) => this._updateSettings(e)}/>
        
        <input class="Switcher__checkbox sr-only" id="io" onChange={this.updateExtruded.bind(this)} type="checkbox" checked="checked"/>
          <label class="Switcher" for="io">
          <div class="Switcher__trigger" data-value="2D"></div>
          <div class="Switcher__trigger" data-value="3D"></div>
        </label>
        
        
       
        </div>
        <DeckGLOverlay data={filteredData || []} extruded={extruded} />
		  </div>
      //<input onChange={this.updateExtruded.bind(this)} type="checkbox" name="extruded"/>

    );
  }
}

render(<Root />, document.body.appendChild(document.createElement('div')));

