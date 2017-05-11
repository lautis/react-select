'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var multiSelectAllValue = '$react-select-internal-select-all$';

function selectAllRenderer(_ref) {
	var focusedOption = _ref.focusedOption;
	var instancePrefix = _ref.instancePrefix;
	var labelKey = _ref.labelKey;
	var onFocus = _ref.onFocus;
	var onSelect = _ref.onSelect;
	var selectAllClassName = _ref.selectAllClassName;
	var selectAllComponent = _ref.selectAllComponent;
	var optionRenderer = _ref.optionRenderer;
	var isSelected = _ref.isSelected;
	var valueKey = _ref.valueKey;
	var onOptionRef = _ref.onOptionRef;

	var SelectAll = selectAllComponent;
	var options = [{ key: multiSelectAllValue, label: 'Select All' }];
	return options.map(function (option, i) {
		var isFocused = option === focusedOption;
		var selectAllClass = (0, _classnames2['default'])(selectAllClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled
		});

		return _react2['default'].createElement(
			SelectAll,
			{
				className: selectAllClass,
				instancePrefix: instancePrefix,
				isDisabled: option.disabled,
				isFocused: isFocused,
				isSelected: isSelected,
				key: 'option-' + i + '-' + option[valueKey],
				onFocus: onFocus,
				onSelect: onSelect,
				option: option,
				optionIndex: i,
				ref: function (ref) {
					onOptionRef(ref, isFocused);
				}
			},
			optionRenderer(option, i)
		);
	});
}

module.exports = selectAllRenderer;