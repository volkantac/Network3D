/* global window */
import React, {Component} from 'react';
import DeckGL, {HexagonLayer} from 'deck.gl';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay.js';
import TimeSelector from './slider.js';
//import styles from './style.css';


const LIGHT_SETTINGS = {
  lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.2,
  lightsStrength: [0.8, 0.0, 0.8, 0.0],
  numberOfLights: 2
};

const MAPBOX_TOKEN = 'pk.eyJ1IjoidGFjdm9sa2FuIiwiYSI6ImNqaWJvczBmaTBkenQza253cG5obTF3dGQifQ.g0QD2OpmfdZMOEBLTKX0-Q';
//process.env.MapboxAccessToken; //comment//eslint-disable-lineQza253cG5obTF3dGQifQ.g0QD2OpmfdZMOEBLTKX0-Q

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

//  {min: 1, max: 50}
const elevationScale = {min: 1, max: 24};

const defaultProps = {
  radius: 500,
  upperPercentile: 100,
  coverage: 0.6
};

const getPosition = data => [data[0], data[1]]

export default class DeckGLOverlay extends Component {
  static get defaultColorRange() {
    return colorRange;
  }

  static get defaultViewport() {
    return {
      longitude: 28.832777,
      latitude: 41.145086,
      zoom: 8.5,
      minZoom: 2,
      maxZoom: 15,
      pitch: 45.5,
      bearing: -12.396674584323023
    };
  }
  
  constructor(props) {
    super(props);
    this.startAnimationTimer = null;
    this.intervalTimer = null;
    this.state = {
      elevationScale: elevationScale.min,
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        width: 500,
        height: 500
      },
    };

    this._startAnimate = this._startAnimate.bind(this);
    this._animateHeight = this._animateHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this));
    this._animate();
    this._resize() 
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length !== this.props.data.length) {
      this._animate();
    }
  }

  compomenentDidUpdate(prevProps) {}

  componentWillUnmount() {
    this._stopAnimate();
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _animate() {
    this._stopAnimate();
    // wait 1.5 secs to start animation so that all data are loaded
    this.startAnimationTimer = window.setTimeout(this._startAnimate, 2000);
  }

  _startAnimate() {
    this.intervalTimer = window.setInterval(this._animateHeight, 75);
  }

  _stopAnimate() {
    window.clearTimeout(this.startAnimationTimer);
    window.clearTimeout(this.intervalTimer);
  }

  _animateHeight() {
    if (this.state.elevationScale === elevationScale.max) {
      this._stopAnimate();
    } else {
      this.setState({elevationScale: this.state.elevationScale + 1});
    }
  }
  

  getElevationValue(d) { 
  const totalHeight = d.reduce((acc, curr) => acc + parseFloat(curr[2]), 0)
  const avg = parseFloat(totalHeight / d.length)
  return avg
  }

  _onViewportChange(viewport) {
      this.setState({
        viewport: {...this.state.viewport, ...viewport}
      });
  }
  

  render() {
    const {data, radius, coverage, upperPercentile, extruded} = this.props;
    console.info('deck render')
    if (!data) {
      return null;
    }
    const layers = [
      new HexagonLayer({
        id: 'heatmap',
        colorRange,
        coverage,
        data,
        elevationRange: [0, 3000],
        elevationScale: this.state.elevationScale,
        extruded,
        getPosition,
        getElevationValue: this.getElevationValue,
        getColorValue: this.getElevationValue,
        lightSettings: LIGHT_SETTINGS,
        //onHover: ({object}) => setTooltip(`${object.centroid.join(', ')}\nCount: ${object.points.length}`), //this.props.onHover,
        opacity: 0.10,
        //pickable: Boolean(this.props.onHover),
        radius,
        upperPercentile,
        pickable:false,
        //
      })
    ];

    
    return  (
    <MapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._onViewportChange.bind(this)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
      <DeckGL {...this.state.viewport} layers={layers} />
    </MapGL>
    )
   
  }
}

DeckGLOverlay.displayName = 'DeckGLOverlay';
DeckGLOverlay.defaultProps = defaultProps;
