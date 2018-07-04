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

var _baseControl = require('../components/base-control');

var _baseControl2 = _interopRequireDefault(_baseControl);

var _globals = require('../utils/globals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var propTypes = (0, _assign2.default)({}, _baseControl2.default.propTypes, {
  redraw: _propTypes2.default.func.isRequired
});

var defaultProps = {
  captureScroll: false,
  captureDrag: false,
  captureClick: false,
  captureDoubleClick: false
};

var CanvasOverlay = function (_BaseControl) {
  (0, _inherits3.default)(CanvasOverlay, _BaseControl);

  function CanvasOverlay(props) {
    (0, _classCallCheck3.default)(this, CanvasOverlay);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CanvasOverlay.__proto__ || (0, _getPrototypeOf2.default)(CanvasOverlay)).call(this, props));

    _this._redraw = _this._redraw.bind(_this);
    _this._canvasLoaded = _this._canvasLoaded.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CanvasOverlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._redraw();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._redraw();
    }
  }, {
    key: '_redraw',
    value: function _redraw() {
      var pixelRatio = _globals.window.devicePixelRatio || 1;
      var canvas = this._canvas;
      var ctx = canvas.getContext('2d');
      ctx.save();
      ctx.scale(pixelRatio, pixelRatio);

      var _context = this.context,
          viewport = _context.viewport,
          isDragging = _context.isDragging;

      this.props.redraw({
        width: viewport.width,
        height: viewport.height,
        ctx: ctx,
        isDragging: isDragging,
        project: viewport.project.bind(viewport),
        unproject: viewport.unproject.bind(viewport)
      });

      ctx.restore();
    }
  }, {
    key: '_canvasLoaded',
    value: function _canvasLoaded(ref) {
      this._canvas = ref;
      this._onContainerLoad(ref);
    }
  }, {
    key: 'render',
    value: function render() {
      var pixelRatio = _globals.window.devicePixelRatio || 1;
      var _context$viewport = this.context.viewport,
          width = _context$viewport.width,
          height = _context$viewport.height;


      return (0, _react.createElement)('canvas', {
        ref: this._canvasLoaded,
        width: width * pixelRatio,
        height: height * pixelRatio,
        style: {
          width: width + 'px',
          height: height + 'px',
          position: 'absolute',
          pointerEvents: 'none',
          left: 0,
          top: 0
        }
      });
    }
  }]);
  return CanvasOverlay;
}(_baseControl2.default);

exports.default = CanvasOverlay;


CanvasOverlay.displayName = 'CanvasOverlay';
CanvasOverlay.propTypes = propTypes;
CanvasOverlay.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vdmVybGF5cy9jYW52YXMtb3ZlcmxheS5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJyZWRyYXciLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImNhcHR1cmVTY3JvbGwiLCJjYXB0dXJlRHJhZyIsImNhcHR1cmVDbGljayIsImNhcHR1cmVEb3VibGVDbGljayIsIkNhbnZhc092ZXJsYXkiLCJwcm9wcyIsIl9yZWRyYXciLCJiaW5kIiwiX2NhbnZhc0xvYWRlZCIsInBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiY2FudmFzIiwiX2NhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzYXZlIiwic2NhbGUiLCJjb250ZXh0Iiwidmlld3BvcnQiLCJpc0RyYWdnaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0IiwidW5wcm9qZWN0IiwicmVzdG9yZSIsInJlZiIsIl9vbkNvbnRhaW5lckxvYWQiLCJzdHlsZSIsInBvc2l0aW9uIiwicG9pbnRlckV2ZW50cyIsImxlZnQiLCJ0b3AiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQXZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxZQUFZLHNCQUFjLEVBQWQsRUFBa0Isc0JBQVlBLFNBQTlCLEVBQXlDO0FBQ3pEQyxVQUFRLG9CQUFVQyxJQUFWLENBQWVDO0FBRGtDLENBQXpDLENBQWxCOztBQUlBLElBQU1DLGVBQWU7QUFDbkJDLGlCQUFlLEtBREk7QUFFbkJDLGVBQWEsS0FGTTtBQUduQkMsZ0JBQWMsS0FISztBQUluQkMsc0JBQW9CO0FBSkQsQ0FBckI7O0lBT3FCQyxhOzs7QUFDbkIseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSkFDWEEsS0FEVzs7QUFFakIsVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUhpQjtBQUlsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsT0FBTDtBQUNEOzs7eUNBRW9CO0FBQ25CLFdBQUtBLE9BQUw7QUFDRDs7OzhCQUVTO0FBQ1IsVUFBTUcsYUFBYSxnQkFBT0MsZ0JBQVAsSUFBMkIsQ0FBOUM7QUFDQSxVQUFNQyxTQUFTLEtBQUtDLE9BQXBCO0FBQ0EsVUFBTUMsTUFBTUYsT0FBT0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FELFVBQUlFLElBQUo7QUFDQUYsVUFBSUcsS0FBSixDQUFVUCxVQUFWLEVBQXNCQSxVQUF0Qjs7QUFMUSxxQkFPdUIsS0FBS1EsT0FQNUI7QUFBQSxVQU9EQyxRQVBDLFlBT0RBLFFBUEM7QUFBQSxVQU9TQyxVQVBULFlBT1NBLFVBUFQ7O0FBUVIsV0FBS2QsS0FBTCxDQUFXVCxNQUFYLENBQWtCO0FBQ2hCd0IsZUFBT0YsU0FBU0UsS0FEQTtBQUVoQkMsZ0JBQVFILFNBQVNHLE1BRkQ7QUFHaEJSLGdCQUhnQjtBQUloQk0sOEJBSmdCO0FBS2hCRyxpQkFBU0osU0FBU0ksT0FBVCxDQUFpQmYsSUFBakIsQ0FBc0JXLFFBQXRCLENBTE87QUFNaEJLLG1CQUFXTCxTQUFTSyxTQUFULENBQW1CaEIsSUFBbkIsQ0FBd0JXLFFBQXhCO0FBTkssT0FBbEI7O0FBU0FMLFVBQUlXLE9BQUo7QUFDRDs7O2tDQUVhQyxHLEVBQUs7QUFDakIsV0FBS2IsT0FBTCxHQUFlYSxHQUFmO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JELEdBQXRCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1oQixhQUFhLGdCQUFPQyxnQkFBUCxJQUEyQixDQUE5QztBQURPLDhCQUU2QixLQUFLTyxPQUZsQyxDQUVBQyxRQUZBO0FBQUEsVUFFV0UsS0FGWCxxQkFFV0EsS0FGWDtBQUFBLFVBRWtCQyxNQUZsQixxQkFFa0JBLE1BRmxCOzs7QUFJUCxhQUNFLDBCQUFjLFFBQWQsRUFBd0I7QUFDdEJJLGFBQUssS0FBS2pCLGFBRFk7QUFFdEJZLGVBQU9BLFFBQVFYLFVBRk87QUFHdEJZLGdCQUFRQSxTQUFTWixVQUhLO0FBSXRCa0IsZUFBTztBQUNMUCxpQkFBVUEsS0FBVixPQURLO0FBRUxDLGtCQUFXQSxNQUFYLE9BRks7QUFHTE8sb0JBQVUsVUFITDtBQUlMQyx5QkFBZSxNQUpWO0FBS0xDLGdCQUFNLENBTEQ7QUFNTEMsZUFBSztBQU5BO0FBSmUsT0FBeEIsQ0FERjtBQWVEOzs7OztrQkEzRGtCM0IsYTs7O0FBOERyQkEsY0FBYzRCLFdBQWQsR0FBNEIsZUFBNUI7QUFDQTVCLGNBQWNULFNBQWQsR0FBMEJBLFNBQTFCO0FBQ0FTLGNBQWNMLFlBQWQsR0FBNkJBLFlBQTdCIiwiZmlsZSI6ImNhbnZhcy1vdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE1IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG5cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VDb250cm9sIGZyb20gJy4uL2NvbXBvbmVudHMvYmFzZS1jb250cm9sJztcbmltcG9ydCB7d2luZG93fSBmcm9tICcuLi91dGlscy9nbG9iYWxzJztcblxuY29uc3QgcHJvcFR5cGVzID0gT2JqZWN0LmFzc2lnbih7fSwgQmFzZUNvbnRyb2wucHJvcFR5cGVzLCB7XG4gIHJlZHJhdzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdHVyZVNjcm9sbDogZmFsc2UsXG4gIGNhcHR1cmVEcmFnOiBmYWxzZSxcbiAgY2FwdHVyZUNsaWNrOiBmYWxzZSxcbiAgY2FwdHVyZURvdWJsZUNsaWNrOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzT3ZlcmxheSBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5fcmVkcmF3ID0gdGhpcy5fcmVkcmF3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fY2FudmFzTG9hZGVkID0gdGhpcy5fY2FudmFzTG9hZGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9yZWRyYXcoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLl9yZWRyYXcoKTtcbiAgfVxuXG4gIF9yZWRyYXcoKSB7XG4gICAgY29uc3QgcGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5fY2FudmFzO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnNjYWxlKHBpeGVsUmF0aW8sIHBpeGVsUmF0aW8pO1xuXG4gICAgY29uc3Qge3ZpZXdwb3J0LCBpc0RyYWdnaW5nfSA9IHRoaXMuY29udGV4dDtcbiAgICB0aGlzLnByb3BzLnJlZHJhdyh7XG4gICAgICB3aWR0aDogdmlld3BvcnQud2lkdGgsXG4gICAgICBoZWlnaHQ6IHZpZXdwb3J0LmhlaWdodCxcbiAgICAgIGN0eCxcbiAgICAgIGlzRHJhZ2dpbmcsXG4gICAgICBwcm9qZWN0OiB2aWV3cG9ydC5wcm9qZWN0LmJpbmQodmlld3BvcnQpLFxuICAgICAgdW5wcm9qZWN0OiB2aWV3cG9ydC51bnByb2plY3QuYmluZCh2aWV3cG9ydClcbiAgICB9KTtcblxuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICBfY2FudmFzTG9hZGVkKHJlZikge1xuICAgIHRoaXMuX2NhbnZhcyA9IHJlZjtcbiAgICB0aGlzLl9vbkNvbnRhaW5lckxvYWQocmVmKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICBjb25zdCB7dmlld3BvcnQ6IHt3aWR0aCwgaGVpZ2h0fX0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgY3JlYXRlRWxlbWVudCgnY2FudmFzJywge1xuICAgICAgICByZWY6IHRoaXMuX2NhbnZhc0xvYWRlZCxcbiAgICAgICAgd2lkdGg6IHdpZHRoICogcGl4ZWxSYXRpbyxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiBwaXhlbFJhdGlvLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRvcDogMFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuQ2FudmFzT3ZlcmxheS5kaXNwbGF5TmFtZSA9ICdDYW52YXNPdmVybGF5JztcbkNhbnZhc092ZXJsYXkucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ2FudmFzT3ZlcmxheS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4iXX0=