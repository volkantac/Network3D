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

var _transitionUtils = require('./transition-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom', 'bearing', 'pitch'];

/**
 * Performs linear interpolation of two viewports.
*/

var LinearInterpolator = function (_TransitionInterpolat) {
  (0, _inherits3.default)(LinearInterpolator, _TransitionInterpolat);

  /**
   * @param {Array} transitionProps - list of props to apply linear transition to.
   */
  function LinearInterpolator() {
    var transitionProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : VIEWPORT_TRANSITION_PROPS;
    (0, _classCallCheck3.default)(this, LinearInterpolator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LinearInterpolator.__proto__ || (0, _getPrototypeOf2.default)(LinearInterpolator)).call(this));

    _this.propNames = transitionProps;
    return _this;
  }

  (0, _createClass3.default)(LinearInterpolator, [{
    key: 'initializeProps',
    value: function initializeProps(startProps, endProps) {
      var startViewportProps = {};
      var endViewportProps = {};

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(this.propNames), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

      return {
        start: startViewportProps,
        end: endViewportProps
      };
    }
  }, {
    key: 'interpolateProps',
    value: function interpolateProps(startProps, endProps, t) {
      var viewport = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.propNames), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          viewport[key] = (0, _transitionUtils.lerp)(startProps[key], endProps[key], t);
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

      return viewport;
    }
  }]);
  return LinearInterpolator;
}(_transitionInterpolator2.default);

exports.default = LinearInterpolator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy90cmFuc2l0aW9uL2xpbmVhci1pbnRlcnBvbGF0b3IuanMiXSwibmFtZXMiOlsiVklFV1BPUlRfVFJBTlNJVElPTl9QUk9QUyIsIkxpbmVhckludGVycG9sYXRvciIsInRyYW5zaXRpb25Qcm9wcyIsInByb3BOYW1lcyIsInN0YXJ0UHJvcHMiLCJlbmRQcm9wcyIsInN0YXJ0Vmlld3BvcnRQcm9wcyIsImVuZFZpZXdwb3J0UHJvcHMiLCJrZXkiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJzdGFydCIsImVuZCIsInQiLCJ2aWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUEsSUFBTUEsNEJBQTRCLENBQUMsV0FBRCxFQUFjLFVBQWQsRUFBMEIsTUFBMUIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsQ0FBbEM7O0FBRUE7Ozs7SUFHcUJDLGtCOzs7QUFFbkI7OztBQUdBLGdDQUF5RDtBQUFBLFFBQTdDQyxlQUE2Qyx1RUFBM0JGLHlCQUEyQjtBQUFBOztBQUFBOztBQUV2RCxVQUFLRyxTQUFMLEdBQWlCRCxlQUFqQjtBQUZ1RDtBQUd4RDs7OztvQ0FFZUUsVSxFQUFZQyxRLEVBQVU7QUFDcEMsVUFBTUMscUJBQXFCLEVBQTNCO0FBQ0EsVUFBTUMsbUJBQW1CLEVBQXpCOztBQUZvQztBQUFBO0FBQUE7O0FBQUE7QUFJcEMsd0RBQWtCLEtBQUtKLFNBQXZCLDRHQUFrQztBQUFBLGNBQXZCSyxHQUF1Qjs7QUFDaEMsY0FBTUMsYUFBYUwsV0FBV0ksR0FBWCxDQUFuQjtBQUNBLGNBQU1FLFdBQVdMLFNBQVNHLEdBQVQsQ0FBakI7QUFDQSxnQ0FBTyw4QkFBUUMsVUFBUixLQUF1Qiw4QkFBUUMsUUFBUixDQUE5QixFQUFvREYsR0FBcEQ7O0FBRUFGLDZCQUFtQkUsR0FBbkIsSUFBMEJDLFVBQTFCO0FBQ0FGLDJCQUFpQkMsR0FBakIsSUFBd0IsZ0RBQTBCQSxHQUExQixFQUErQkMsVUFBL0IsRUFBMkNDLFFBQTNDLENBQXhCO0FBQ0Q7QUFYbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFhcEMsYUFBTztBQUNMQyxlQUFPTCxrQkFERjtBQUVMTSxhQUFLTDtBQUZBLE9BQVA7QUFJRDs7O3FDQUVnQkgsVSxFQUFZQyxRLEVBQVVRLEMsRUFBRztBQUN4QyxVQUFNQyxXQUFXLEVBQWpCO0FBRHdDO0FBQUE7QUFBQTs7QUFBQTtBQUV4Qyx5REFBa0IsS0FBS1gsU0FBdkIsaUhBQWtDO0FBQUEsY0FBdkJLLEdBQXVCOztBQUNoQ00sbUJBQVNOLEdBQVQsSUFBZ0IsMkJBQUtKLFdBQVdJLEdBQVgsQ0FBTCxFQUFzQkgsU0FBU0csR0FBVCxDQUF0QixFQUFxQ0ssQ0FBckMsQ0FBaEI7QUFDRDtBQUp1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUt4QyxhQUFPQyxRQUFQO0FBQ0Q7Ozs7O2tCQW5Da0JiLGtCIiwiZmlsZSI6ImxpbmVhci1pbnRlcnBvbGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgVHJhbnNpdGlvbkludGVycG9sYXRvciBmcm9tICcuL3RyYW5zaXRpb24taW50ZXJwb2xhdG9yJztcblxuaW1wb3J0IHtpc1ZhbGlkLCBsZXJwLCBnZXRFbmRWYWx1ZUJ5U2hvcnRlc3RQYXRofSBmcm9tICcuL3RyYW5zaXRpb24tdXRpbHMnO1xuXG5jb25zdCBWSUVXUE9SVF9UUkFOU0lUSU9OX1BST1BTID0gWydsb25naXR1ZGUnLCAnbGF0aXR1ZGUnLCAnem9vbScsICdiZWFyaW5nJywgJ3BpdGNoJ107XG5cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb2YgdHdvIHZpZXdwb3J0cy5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lYXJJbnRlcnBvbGF0b3IgZXh0ZW5kcyBUcmFuc2l0aW9uSW50ZXJwb2xhdG9yIHtcblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheX0gdHJhbnNpdGlvblByb3BzIC0gbGlzdCBvZiBwcm9wcyB0byBhcHBseSBsaW5lYXIgdHJhbnNpdGlvbiB0by5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHRyYW5zaXRpb25Qcm9wcyA9IFZJRVdQT1JUX1RSQU5TSVRJT05fUFJPUFMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJvcE5hbWVzID0gdHJhbnNpdGlvblByb3BzO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVByb3BzKHN0YXJ0UHJvcHMsIGVuZFByb3BzKSB7XG4gICAgY29uc3Qgc3RhcnRWaWV3cG9ydFByb3BzID0ge307XG4gICAgY29uc3QgZW5kVmlld3BvcnRQcm9wcyA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcm9wTmFtZXMpIHtcbiAgICAgIGNvbnN0IHN0YXJ0VmFsdWUgPSBzdGFydFByb3BzW2tleV07XG4gICAgICBjb25zdCBlbmRWYWx1ZSA9IGVuZFByb3BzW2tleV07XG4gICAgICBhc3NlcnQoaXNWYWxpZChzdGFydFZhbHVlKSAmJiBpc1ZhbGlkKGVuZFZhbHVlKSwgYCR7a2V5fSBtdXN0IGJlIHN1cHBsaWVkIGZvciB0cmFuc2l0aW9uYCk7XG5cbiAgICAgIHN0YXJ0Vmlld3BvcnRQcm9wc1trZXldID0gc3RhcnRWYWx1ZTtcbiAgICAgIGVuZFZpZXdwb3J0UHJvcHNba2V5XSA9IGdldEVuZFZhbHVlQnlTaG9ydGVzdFBhdGgoa2V5LCBzdGFydFZhbHVlLCBlbmRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBzdGFydFZpZXdwb3J0UHJvcHMsXG4gICAgICBlbmQ6IGVuZFZpZXdwb3J0UHJvcHNcbiAgICB9O1xuICB9XG5cbiAgaW50ZXJwb2xhdGVQcm9wcyhzdGFydFByb3BzLCBlbmRQcm9wcywgdCkge1xuICAgIGNvbnN0IHZpZXdwb3J0ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5wcm9wTmFtZXMpIHtcbiAgICAgIHZpZXdwb3J0W2tleV0gPSBsZXJwKHN0YXJ0UHJvcHNba2V5XSwgZW5kUHJvcHNba2V5XSwgdCk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3cG9ydDtcbiAgfVxuXG59XG4iXX0=