import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};


export default class TimeSelector extends PureComponent {
	
  _renderHourSlider(){
    return (

	  <div className="input-group">
        <label className="label" htmlFor="Hour">
          Hour
        </label>
		<div>
		  <input
		  type="range"
		  id="Hour"
		  min={0}
		  max={23}
		  step={1}
		  value={this.props.settings['hour']}
			onChange={ e => this.props.onChange({['hour']: e.target.value}) }
		/>
	 {console.log('this.props', this.props)}
	 <span>{this.props.settings['hour']}</span>
        </div>
      </div>
	);
  }

  render(){
    return (
	  <div>
		{this._renderHourSlider()}
	  </div>
    );
  }
}

TimeSelector.propTypes = propTypes;