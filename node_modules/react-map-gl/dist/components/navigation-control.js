'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _baseControl = require('./base-control');

var _baseControl2 = _interopRequireDefault(_baseControl);

var _mapState = require('../utils/map-state');

var _mapState2 = _interopRequireDefault(_mapState);

var _transitionManager = require('../utils/transition-manager');

var _transitionManager2 = _interopRequireDefault(_transitionManager);

var _deprecateWarn = require('../utils/deprecate-warn');

var _deprecateWarn2 = _interopRequireDefault(_deprecateWarn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LINEAR_TRANSITION_PROPS = (0, _assign2.default)({}, _transitionManager2.default.defaultProps, {
  transitionDuration: 300
});

var propTypes = (0, _assign2.default)({}, _baseControl2.default.propTypes, {
  // Custom className
  className: _propTypes2.default.string,
  /**
    * `onViewportChange` callback is fired when the user interacted with the
    * map. The object passed to the callback contains `latitude`,
    * `longitude` and `zoom` and additional state information.
    */
  onViewportChange: _propTypes2.default.func.isRequired,
  // Show/hide compass button
  showCompass: _propTypes2.default.bool,
  // Show/hide zoom buttons
  showZoom: _propTypes2.default.bool
});

var defaultProps = (0, _assign2.default)({}, _baseControl2.default.defaultProps, {
  className: '',
  onViewportChange: function onViewportChange() {},
  showCompass: true,
  showZoom: true
});

/*
 * PureComponent doesn't update when context changes, so
 * implementing our own shouldComponentUpdate here.
 */

var NavigationControl = function (_BaseControl) {
  (0, _inherits3.default)(NavigationControl, _BaseControl);

  function NavigationControl(props) {
    (0, _classCallCheck3.default)(this, NavigationControl);

    // Check for deprecated props
    var _this = (0, _possibleConstructorReturn3.default)(this, (NavigationControl.__proto__ || (0, _getPrototypeOf2.default)(NavigationControl)).call(this, props));

    (0, _deprecateWarn2.default)(props);

    _this._updateViewport = _this._updateViewport.bind(_this);
    _this._onZoomIn = _this._onZoomIn.bind(_this);
    _this._onZoomOut = _this._onZoomOut.bind(_this);
    _this._onResetNorth = _this._onResetNorth.bind(_this);
    _this._renderCompass = _this._renderCompass.bind(_this);
    _this._renderButton = _this._renderButton.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NavigationControl, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.viewport.bearing !== nextContext.viewport.bearing;
    }
  }, {
    key: '_updateViewport',
    value: function _updateViewport(opts) {
      var viewport = this.context.viewport;

      var mapState = new _mapState2.default((0, _assign2.default)({}, viewport, opts));
      // TODO(deprecate): remove this check when `onChangeViewport` gets deprecated
      var onViewportChange = this.props.onChangeViewport || this.props.onViewportChange;
      var newViewport = (0, _assign2.default)({}, mapState.getViewportProps(), LINEAR_TRANSITION_PROPS);

      onViewportChange(newViewport);
    }
  }, {
    key: '_onZoomIn',
    value: function _onZoomIn() {
      this._updateViewport({ zoom: this.context.viewport.zoom + 1 });
    }
  }, {
    key: '_onZoomOut',
    value: function _onZoomOut() {
      this._updateViewport({ zoom: this.context.viewport.zoom - 1 });
    }
  }, {
    key: '_onResetNorth',
    value: function _onResetNorth() {
      this._updateViewport({ bearing: 0, pitch: 0 });
    }
  }, {
    key: '_renderCompass',
    value: function _renderCompass() {
      var bearing = this.context.viewport.bearing;

      return (0, _react.createElement)('span', {
        className: 'mapboxgl-ctrl-compass-arrow',
        style: { transform: 'rotate(' + bearing + 'deg)' }
      });
    }
  }, {
    key: '_renderButton',
    value: function _renderButton(type, label, callback, children) {
      return (0, _react.createElement)('button', {
        key: type,
        className: 'mapboxgl-ctrl-icon mapboxgl-ctrl-' + type,
        type: 'button',
        title: label,
        onClick: callback,
        children: children
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          showCompass = _props.showCompass,
          showZoom = _props.showZoom;


      return (0, _react.createElement)('div', {
        className: 'mapboxgl-ctrl mapboxgl-ctrl-group ' + className,
        ref: this._onContainerLoad
      }, [showZoom && this._renderButton('zoom-in', 'Zoom In', this._onZoomIn), showZoom && this._renderButton('zoom-out', 'Zoom Out', this._onZoomOut), showCompass && this._renderButton('compass', 'Reset North', this._onResetNorth, this._renderCompass())]);
    }
  }]);
  return NavigationControl;
}(_baseControl2.default);

exports.default = NavigationControl;


NavigationControl.displayName = 'NavigationControl';
NavigationControl.propTypes = propTypes;
NavigationControl.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24tY29udHJvbC5qcyJdLCJuYW1lcyI6WyJMSU5FQVJfVFJBTlNJVElPTl9QUk9QUyIsImRlZmF1bHRQcm9wcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsInByb3BUeXBlcyIsImNsYXNzTmFtZSIsInN0cmluZyIsIm9uVmlld3BvcnRDaGFuZ2UiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInNob3dDb21wYXNzIiwiYm9vbCIsInNob3dab29tIiwiTmF2aWdhdGlvbkNvbnRyb2wiLCJwcm9wcyIsIl91cGRhdGVWaWV3cG9ydCIsImJpbmQiLCJfb25ab29tSW4iLCJfb25ab29tT3V0IiwiX29uUmVzZXROb3J0aCIsIl9yZW5kZXJDb21wYXNzIiwiX3JlbmRlckJ1dHRvbiIsIm5leHRQcm9wcyIsIm5leHRTdGF0ZSIsIm5leHRDb250ZXh0IiwiY29udGV4dCIsInZpZXdwb3J0IiwiYmVhcmluZyIsIm9wdHMiLCJtYXBTdGF0ZSIsIm9uQ2hhbmdlVmlld3BvcnQiLCJuZXdWaWV3cG9ydCIsImdldFZpZXdwb3J0UHJvcHMiLCJ6b29tIiwicGl0Y2giLCJzdHlsZSIsInRyYW5zZm9ybSIsInR5cGUiLCJsYWJlbCIsImNhbGxiYWNrIiwiY2hpbGRyZW4iLCJrZXkiLCJ0aXRsZSIsIm9uQ2xpY2siLCJyZWYiLCJfb25Db250YWluZXJMb2FkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLDBCQUEwQixzQkFBYyxFQUFkLEVBQWtCLDRCQUFrQkMsWUFBcEMsRUFBa0Q7QUFDaEZDLHNCQUFvQjtBQUQ0RCxDQUFsRCxDQUFoQzs7QUFJQSxJQUFNQyxZQUFZLHNCQUFjLEVBQWQsRUFBa0Isc0JBQVlBLFNBQTlCLEVBQXlDO0FBQ3pEO0FBQ0FDLGFBQVcsb0JBQVVD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QUFBQSxVQUVBVCxTQUZBLFVBRUFBLFNBRkE7QUFBQSxVQUVXSyxXQUZYLFVBRVdBLFdBRlg7QUFBQSxVQUV3QkUsUUFGeEIsVUFFd0JBLFFBRnhCOzs7QUFJUCxhQUFPLDBCQUFjLEtBQWQsRUFBcUI7QUFDMUJQLDBEQUFnREEsU0FEdEI7QUFFMUJ1QyxhQUFLLEtBQUtDO0FBRmdCLE9BQXJCLEVBR0osQ0FDRGpDLFlBQVksS0FBS1MsYUFBTCxDQUFtQixTQUFuQixFQUE4QixTQUE5QixFQUF5QyxLQUFLSixTQUE5QyxDQURYLEVBRURMLFlBQVksS0FBS1MsYUFBTCxDQUFtQixVQUFuQixFQUErQixVQUEvQixFQUEyQyxLQUFLSCxVQUFoRCxDQUZYLEVBR0RSLGVBQ0UsS0FBS1csYUFBTCxDQUFtQixTQUFuQixFQUE4QixhQUE5QixFQUE2QyxLQUFLRixhQUFsRCxFQUFpRSxLQUFLQyxjQUFMLEVBQWpFLENBSkQsQ0FISSxDQUFQO0FBU0Q7Ozs7O2tCQXpFa0JQLGlCOzs7QUE0RXJCQSxrQkFBa0JpQyxXQUFsQixHQUFnQyxtQkFBaEM7QUFDQWpDLGtCQUFrQlQsU0FBbEIsR0FBOEJBLFNBQTlCO0FBQ0FTLGtCQUFrQlgsWUFBbEIsR0FBaUNBLFlBQWpDIiwiZmlsZSI6Im5hdmlnYXRpb24tY29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlQ29udHJvbCBmcm9tICcuL2Jhc2UtY29udHJvbCc7XG5cbmltcG9ydCBNYXBTdGF0ZSBmcm9tICcuLi91dGlscy9tYXAtc3RhdGUnO1xuaW1wb3J0IFRyYW5zaXRpb25NYW5hZ2VyIGZyb20gJy4uL3V0aWxzL3RyYW5zaXRpb24tbWFuYWdlcic7XG5cbmltcG9ydCBkZXByZWNhdGVXYXJuIGZyb20gJy4uL3V0aWxzL2RlcHJlY2F0ZS13YXJuJztcblxuY29uc3QgTElORUFSX1RSQU5TSVRJT05fUFJPUFMgPSBPYmplY3QuYXNzaWduKHt9LCBUcmFuc2l0aW9uTWFuYWdlci5kZWZhdWx0UHJvcHMsIHtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAzMDBcbn0pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlQ29udHJvbC5wcm9wVHlwZXMsIHtcbiAgLy8gQ3VzdG9tIGNsYXNzTmFtZVxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgICogYG9uVmlld3BvcnRDaGFuZ2VgIGNhbGxiYWNrIGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgaW50ZXJhY3RlZCB3aXRoIHRoZVxuICAgICogbWFwLiBUaGUgb2JqZWN0IHBhc3NlZCB0byB0aGUgY2FsbGJhY2sgY29udGFpbnMgYGxhdGl0dWRlYCxcbiAgICAqIGBsb25naXR1ZGVgIGFuZCBgem9vbWAgYW5kIGFkZGl0aW9uYWwgc3RhdGUgaW5mb3JtYXRpb24uXG4gICAgKi9cbiAgb25WaWV3cG9ydENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLy8gU2hvdy9oaWRlIGNvbXBhc3MgYnV0dG9uXG4gIHNob3dDb21wYXNzOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gU2hvdy9oaWRlIHpvb20gYnV0dG9uc1xuICBzaG93Wm9vbTogUHJvcFR5cGVzLmJvb2xcbn0pO1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlQ29udHJvbC5kZWZhdWx0UHJvcHMsIHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgb25WaWV3cG9ydENoYW5nZTogKCkgPT4ge30sXG4gIHNob3dDb21wYXNzOiB0cnVlLFxuICBzaG93Wm9vbTogdHJ1ZVxufSk7XG5cbi8qXG4gKiBQdXJlQ29tcG9uZW50IGRvZXNuJ3QgdXBkYXRlIHdoZW4gY29udGV4dCBjaGFuZ2VzLCBzb1xuICogaW1wbGVtZW50aW5nIG91ciBvd24gc2hvdWxkQ29tcG9uZW50VXBkYXRlIGhlcmUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIENoZWNrIGZvciBkZXByZWNhdGVkIHByb3BzXG4gICAgZGVwcmVjYXRlV2Fybihwcm9wcyk7XG5cbiAgICB0aGlzLl91cGRhdGVWaWV3cG9ydCA9IHRoaXMuX3VwZGF0ZVZpZXdwb3J0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25ab29tSW4gPSB0aGlzLl9vblpvb21Jbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uWm9vbU91dCA9IHRoaXMuX29uWm9vbU91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uUmVzZXROb3J0aCA9IHRoaXMuX29uUmVzZXROb3J0aC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3JlbmRlckNvbXBhc3MgPSB0aGlzLl9yZW5kZXJDb21wYXNzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcmVuZGVyQnV0dG9uID0gdGhpcy5fcmVuZGVyQnV0dG9uLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC52aWV3cG9ydC5iZWFyaW5nICE9PSBuZXh0Q29udGV4dC52aWV3cG9ydC5iZWFyaW5nO1xuICB9XG5cbiAgX3VwZGF0ZVZpZXdwb3J0KG9wdHMpIHtcbiAgICBjb25zdCB7dmlld3BvcnR9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IG1hcFN0YXRlID0gbmV3IE1hcFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIHZpZXdwb3J0LCBvcHRzKSk7XG4gICAgLy8gVE9ETyhkZXByZWNhdGUpOiByZW1vdmUgdGhpcyBjaGVjayB3aGVuIGBvbkNoYW5nZVZpZXdwb3J0YCBnZXRzIGRlcHJlY2F0ZWRcbiAgICBjb25zdCBvblZpZXdwb3J0Q2hhbmdlID0gdGhpcy5wcm9wcy5vbkNoYW5nZVZpZXdwb3J0IHx8IHRoaXMucHJvcHMub25WaWV3cG9ydENoYW5nZTtcbiAgICBjb25zdCBuZXdWaWV3cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIG1hcFN0YXRlLmdldFZpZXdwb3J0UHJvcHMoKSwgTElORUFSX1RSQU5TSVRJT05fUFJPUFMpO1xuXG4gICAgb25WaWV3cG9ydENoYW5nZShuZXdWaWV3cG9ydCk7XG4gIH1cblxuICBfb25ab29tSW4oKSB7XG4gICAgdGhpcy5fdXBkYXRlVmlld3BvcnQoe3pvb206IHRoaXMuY29udGV4dC52aWV3cG9ydC56b29tICsgMX0pO1xuICB9XG5cbiAgX29uWm9vbU91dCgpIHtcbiAgICB0aGlzLl91cGRhdGVWaWV3cG9ydCh7em9vbTogdGhpcy5jb250ZXh0LnZpZXdwb3J0Lnpvb20gLSAxfSk7XG4gIH1cblxuICBfb25SZXNldE5vcnRoKCkge1xuICAgIHRoaXMuX3VwZGF0ZVZpZXdwb3J0KHtiZWFyaW5nOiAwLCBwaXRjaDogMH0pO1xuICB9XG5cbiAgX3JlbmRlckNvbXBhc3MoKSB7XG4gICAgY29uc3Qge2JlYXJpbmd9ID0gdGhpcy5jb250ZXh0LnZpZXdwb3J0O1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgY2xhc3NOYW1lOiAnbWFwYm94Z2wtY3RybC1jb21wYXNzLWFycm93JyxcbiAgICAgIHN0eWxlOiB7dHJhbnNmb3JtOiBgcm90YXRlKCR7YmVhcmluZ31kZWcpYH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW5kZXJCdXR0b24odHlwZSwgbGFiZWwsIGNhbGxiYWNrLCBjaGlsZHJlbikge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgICBrZXk6IHR5cGUsXG4gICAgICBjbGFzc05hbWU6IGBtYXBib3hnbC1jdHJsLWljb24gbWFwYm94Z2wtY3RybC0ke3R5cGV9YCxcbiAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgdGl0bGU6IGxhYmVsLFxuICAgICAgb25DbGljazogY2FsbGJhY2ssXG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3Qge2NsYXNzTmFtZSwgc2hvd0NvbXBhc3MsIHNob3dab29tfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgY2xhc3NOYW1lOiBgbWFwYm94Z2wtY3RybCBtYXBib3hnbC1jdHJsLWdyb3VwICR7Y2xhc3NOYW1lfWAsXG4gICAgICByZWY6IHRoaXMuX29uQ29udGFpbmVyTG9hZFxuICAgIH0sIFtcbiAgICAgIHNob3dab29tICYmIHRoaXMuX3JlbmRlckJ1dHRvbignem9vbS1pbicsICdab29tIEluJywgdGhpcy5fb25ab29tSW4pLFxuICAgICAgc2hvd1pvb20gJiYgdGhpcy5fcmVuZGVyQnV0dG9uKCd6b29tLW91dCcsICdab29tIE91dCcsIHRoaXMuX29uWm9vbU91dCksXG4gICAgICBzaG93Q29tcGFzcyAmJlxuICAgICAgICB0aGlzLl9yZW5kZXJCdXR0b24oJ2NvbXBhc3MnLCAnUmVzZXQgTm9ydGgnLCB0aGlzLl9vblJlc2V0Tm9ydGgsIHRoaXMuX3JlbmRlckNvbXBhc3MoKSlcbiAgICBdKTtcbiAgfVxufVxuXG5OYXZpZ2F0aW9uQ29udHJvbC5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uQ29udHJvbCc7XG5OYXZpZ2F0aW9uQ29udHJvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5OYXZpZ2F0aW9uQ29udHJvbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=