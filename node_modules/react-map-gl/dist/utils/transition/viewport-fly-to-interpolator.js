'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _transitionInterpolator = require('./transition-interpolator');

var _transitionInterpolator2 = _interopRequireDefault(_transitionInterpolator);

var _viewportMercatorProject = require('viewport-mercator-project');

var _transitionUtils = require('./transition-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];
var REQUIRED_PROPS = ['latitude', 'longitude', 'zoom', 'width', 'height'];
var LINEARLY_INTERPOLATED_PROPS = ['bearing', 'pitch'];

/**
 * This class adapts mapbox-gl-js Map#flyTo animation so it can be used in
 * react/redux architecture.
 * mapbox-gl-js flyTo : https://www.mapbox.com/mapbox-gl-js/api/#map#flyto.
 * It implements “Smooth and efficient zooming and panning.” algorithm by
 * "Jarke J. van Wijk and Wim A.A. Nuij"
*/

var ViewportFlyToInterpolator = function (_TransitionInterpolat) {
  (0, _inherits3.default)(ViewportFlyToInterpolator, _TransitionInterpolat);

  function ViewportFlyToInterpolator() {
    (0, _classCallCheck3.default)(this, ViewportFlyToInterpolator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ViewportFlyToInterpolator.__proto__ || (0, _getPrototypeOf2.default)(ViewportFlyToInterpolator)).call(this));

    _this.propNames = VIEWPORT_TRANSITION_PROPS;
    return _this;
  }

  (0, _createClass3.default)(ViewportFlyToInterpolator, [{
    key: 'initializeProps',
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};

      // Check minimum required props
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(REQUIRED_PROPS), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var startValue = startProps[key];
          var endValue = endProps[key];
          (0, _assert2.default)((0, _transitionUtils.isValid)(startValue) && (0, _transitionUtils.isValid)(endValue), key + ' must be supplied for transition');
          startViewportProps[key] = startValue;
          endViewportProps[key] = (0, _transitionUtils.getEndValueByShortestPath)(key, startValue, endValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(LINEARLY_INTERPOLATED_PROPS), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _key = _step2.value;

          var _startValue = startProps[_key] || 0;
          var _endValue = endProps[_key] || 0;
          startViewportProps[_key] = _startValue;
          endViewportProps[_key] = (0, _transitionUtils.getEndValueByShortestPath)(_key, _startValue, _endValue);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: 'interpolateProps',
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = (0, _viewportMercatorProject.flyToViewport)(startProps, endProps, t);

      // Linearly interpolate 'bearing' and 'pitch' if exist.
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(LINEARLY_INTERPOLATED_PROPS), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          viewport[key] = (0, _transitionUtils.lerp)(startProps[key], endProps[key], t);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return viewport;
    }
  }]);
  return ViewportFlyToInterpolator;
}(_transitionInterpolator2.default);

exports.default = ViewportFlyToInterpolator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy90cmFuc2l0aW9uL3ZpZXdwb3J0LWZseS10by1pbnRlcnBvbGF0b3IuanMiXSwibmFtZXMiOlsiVklFV1BPUlRfVFJBTlNJVElPTl9QUk9QUyIsIlJFUVVJUkVEX1BST1BTIiwiTElORUFSTFlfSU5URVJQT0xBVEVEX1BST1BTIiwiVmlld3BvcnRGbHlUb0ludGVycG9sYXRvciIsInByb3BOYW1lcyIsInN0YXJ0UHJvcHMiLCJlbmRQcm9wcyIsInN0YXJ0Vmlld3BvcnRQcm9wcyIsImVuZFZpZXdwb3J0UHJvcHMiLCJrZXkiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJzdGFydCIsImVuZCIsInQiLCJ2aWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsNEJBQTRCLENBQUMsV0FBRCxFQUFjLFVBQWQsRUFBMEIsTUFBMUIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsQ0FBbEM7QUFDQSxJQUFNQyxpQkFBaUIsQ0FBQyxVQUFELEVBQWEsV0FBYixFQUEwQixNQUExQixFQUFrQyxPQUFsQyxFQUEyQyxRQUEzQyxDQUF2QjtBQUNBLElBQU1DLDhCQUE4QixDQUFDLFNBQUQsRUFBWSxPQUFaLENBQXBDOztBQUVBOzs7Ozs7OztJQU9xQkMseUI7OztBQUVuQix1Q0FBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFNBQUwsR0FBaUJKLHlCQUFqQjtBQUZZO0FBR2I7Ozs7b0NBRWVLLFUsRUFBWUMsUSxFQUFVO0FBQ3BDLFVBQU1DLHFCQUFxQixFQUEzQjtBQUNBLFVBQU1DLG1CQUFtQixFQUF6Qjs7QUFFQTtBQUpvQztBQUFBO0FBQUE7O0FBQUE7QUFLcEMsd0RBQWtCUCxjQUFsQiw0R0FBa0M7QUFBQSxjQUF2QlEsR0FBdUI7O0FBQ2hDLGNBQU1DLGFBQWFMLFdBQVdJLEdBQVgsQ0FBbkI7QUFDQSxjQUFNRSxXQUFXTCxTQUFTRyxHQUFULENBQWpCO0FBQ0EsZ0NBQU8sOEJBQVFDLFVBQVIsS0FBdUIsOEJBQVFDLFFBQVIsQ0FBOUIsRUFBb0RGLEdBQXBEO0FBQ0FGLDZCQUFtQkUsR0FBbkIsSUFBMEJDLFVBQTFCO0FBQ0FGLDJCQUFpQkMsR0FBakIsSUFBd0IsZ0RBQTBCQSxHQUExQixFQUErQkMsVUFBL0IsRUFBMkNDLFFBQTNDLENBQXhCO0FBQ0Q7QUFYbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFhcEMseURBQWtCVCwyQkFBbEIsaUhBQStDO0FBQUEsY0FBcENPLElBQW9DOztBQUM3QyxjQUFNQyxjQUFhTCxXQUFXSSxJQUFYLEtBQW1CLENBQXRDO0FBQ0EsY0FBTUUsWUFBV0wsU0FBU0csSUFBVCxLQUFpQixDQUFsQztBQUNBRiw2QkFBbUJFLElBQW5CLElBQTBCQyxXQUExQjtBQUNBRiwyQkFBaUJDLElBQWpCLElBQXdCLGdEQUEwQkEsSUFBMUIsRUFBK0JDLFdBQS9CLEVBQTJDQyxTQUEzQyxDQUF4QjtBQUNEO0FBbEJtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CcEMsYUFBTztBQUNMQyxlQUFPTCxrQkFERjtBQUVMTSxhQUFLTDtBQUZBLE9BQVA7QUFJRDs7O3FDQUVnQkgsVSxFQUFZQyxRLEVBQVVRLEMsRUFBRztBQUN4QyxVQUFNQyxXQUFXLDRDQUFjVixVQUFkLEVBQTBCQyxRQUExQixFQUFvQ1EsQ0FBcEMsQ0FBakI7O0FBRUE7QUFId0M7QUFBQTtBQUFBOztBQUFBO0FBSXhDLHlEQUFrQlosMkJBQWxCLGlIQUErQztBQUFBLGNBQXBDTyxHQUFvQzs7QUFDN0NNLG1CQUFTTixHQUFULElBQWdCLDJCQUFLSixXQUFXSSxHQUFYLENBQUwsRUFBc0JILFNBQVNHLEdBQVQsQ0FBdEIsRUFBcUNLLENBQXJDLENBQWhCO0FBQ0Q7QUFOdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFReEMsYUFBT0MsUUFBUDtBQUNEOzs7OztrQkExQ2tCWix5QiIsImZpbGUiOiJ2aWV3cG9ydC1mbHktdG8taW50ZXJwb2xhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IFRyYW5zaXRpb25JbnRlcnBvbGF0b3IgZnJvbSAnLi90cmFuc2l0aW9uLWludGVycG9sYXRvcic7XG5cbmltcG9ydCB7Zmx5VG9WaWV3cG9ydH0gZnJvbSAndmlld3BvcnQtbWVyY2F0b3ItcHJvamVjdCc7XG5pbXBvcnQge2lzVmFsaWQsIGxlcnAsIGdldEVuZFZhbHVlQnlTaG9ydGVzdFBhdGh9IGZyb20gJy4vdHJhbnNpdGlvbi11dGlscyc7XG5cbmNvbnN0IFZJRVdQT1JUX1RSQU5TSVRJT05fUFJPUFMgPSBbJ2xvbmdpdHVkZScsICdsYXRpdHVkZScsICd6b29tJywgJ2JlYXJpbmcnLCAncGl0Y2gnXTtcbmNvbnN0IFJFUVVJUkVEX1BST1BTID0gWydsYXRpdHVkZScsICdsb25naXR1ZGUnLCAnem9vbScsICd3aWR0aCcsICdoZWlnaHQnXTtcbmNvbnN0IExJTkVBUkxZX0lOVEVSUE9MQVRFRF9QUk9QUyA9IFsnYmVhcmluZycsICdwaXRjaCddO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgYWRhcHRzIG1hcGJveC1nbC1qcyBNYXAjZmx5VG8gYW5pbWF0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIGluXG4gKiByZWFjdC9yZWR1eCBhcmNoaXRlY3R1cmUuXG4gKiBtYXBib3gtZ2wtanMgZmx5VG8gOiBodHRwczovL3d3dy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hcGkvI21hcCNmbHl0by5cbiAqIEl0IGltcGxlbWVudHMg4oCcU21vb3RoIGFuZCBlZmZpY2llbnQgem9vbWluZyBhbmQgcGFubmluZy7igJ0gYWxnb3JpdGhtIGJ5XG4gKiBcIkphcmtlIEouIHZhbiBXaWprIGFuZCBXaW0gQS5BLiBOdWlqXCJcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydEZseVRvSW50ZXJwb2xhdG9yIGV4dGVuZHMgVHJhbnNpdGlvbkludGVycG9sYXRvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByb3BOYW1lcyA9IFZJRVdQT1JUX1RSQU5TSVRJT05fUFJPUFM7XG4gIH1cblxuICBpbml0aWFsaXplUHJvcHMoc3RhcnRQcm9wcywgZW5kUHJvcHMpIHtcbiAgICBjb25zdCBzdGFydFZpZXdwb3J0UHJvcHMgPSB7fTtcbiAgICBjb25zdCBlbmRWaWV3cG9ydFByb3BzID0ge307XG5cbiAgICAvLyBDaGVjayBtaW5pbXVtIHJlcXVpcmVkIHByb3BzXG4gICAgZm9yIChjb25zdCBrZXkgb2YgUkVRVUlSRURfUFJPUFMpIHtcbiAgICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSBzdGFydFByb3BzW2tleV07XG4gICAgICBjb25zdCBlbmRWYWx1ZSA9IGVuZFByb3BzW2tleV07XG4gICAgICBhc3NlcnQoaXNWYWxpZChzdGFydFZhbHVlKSAmJiBpc1ZhbGlkKGVuZFZhbHVlKSwgYCR7a2V5fSBtdXN0IGJlIHN1cHBsaWVkIGZvciB0cmFuc2l0aW9uYCk7XG4gICAgICBzdGFydFZpZXdwb3J0UHJvcHNba2V5XSA9IHN0YXJ0VmFsdWU7XG4gICAgICBlbmRWaWV3cG9ydFByb3BzW2tleV0gPSBnZXRFbmRWYWx1ZUJ5U2hvcnRlc3RQYXRoKGtleSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIExJTkVBUkxZX0lOVEVSUE9MQVRFRF9QUk9QUykge1xuICAgICAgY29uc3Qgc3RhcnRWYWx1ZSA9IHN0YXJ0UHJvcHNba2V5XSB8fCAwO1xuICAgICAgY29uc3QgZW5kVmFsdWUgPSBlbmRQcm9wc1trZXldIHx8IDA7XG4gICAgICBzdGFydFZpZXdwb3J0UHJvcHNba2V5XSA9IHN0YXJ0VmFsdWU7XG4gICAgICBlbmRWaWV3cG9ydFByb3BzW2tleV0gPSBnZXRFbmRWYWx1ZUJ5U2hvcnRlc3RQYXRoKGtleSwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogc3RhcnRWaWV3cG9ydFByb3BzLFxuICAgICAgZW5kOiBlbmRWaWV3cG9ydFByb3BzXG4gICAgfTtcbiAgfVxuXG4gIGludGVycG9sYXRlUHJvcHMoc3RhcnRQcm9wcywgZW5kUHJvcHMsIHQpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IGZseVRvVmlld3BvcnQoc3RhcnRQcm9wcywgZW5kUHJvcHMsIHQpO1xuXG4gICAgLy8gTGluZWFybHkgaW50ZXJwb2xhdGUgJ2JlYXJpbmcnIGFuZCAncGl0Y2gnIGlmIGV4aXN0LlxuICAgIGZvciAoY29uc3Qga2V5IG9mIExJTkVBUkxZX0lOVEVSUE9MQVRFRF9QUk9QUykge1xuICAgICAgdmlld3BvcnRba2V5XSA9IGxlcnAoc3RhcnRQcm9wc1trZXldLCBlbmRQcm9wc1trZXldLCB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld3BvcnQ7XG4gIH1cblxufVxuIl19