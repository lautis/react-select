import classNames from 'classnames';
import React from 'react';

const multiSelectAllValue = '$react-select-internal-select-all$';

function selectAllRenderer ({
	focusedOption,
	instancePrefix,
	labelKey,
	onFocus,
	onSelect,
	selectAllClassName,
	selectAllComponent,
	optionRenderer,
	valueArray,
	valueKey,
	onOptionRef
}) {
	let SelectAll = selectAllComponent;
	const options = [{ key: multiSelectAllValue, label: 'Select All' }];
	return options.map((option, i) => {
		let isSelected = valueArray && valueArray.indexOf(option) > -1;
		let isFocused = option === focusedOption;
		let selectAllClass = classNames(selectAllClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled,
		});

		return (
			<SelectAll
				className={selectAllClass}
				instancePrefix={instancePrefix}
				isDisabled={option.disabled}
				isFocused={isFocused}
				isSelected={isSelected}
				key={`option-${i}-${option[valueKey]}`}
				onFocus={onFocus}
				onSelect={onSelect}
				option={option}
				optionIndex={i}
				ref={ref => { onOptionRef(ref, isFocused); }}
			>
				{optionRenderer(option, i)}
			</Option>
		);
	});
}

module.exports = selectAllRenderer;
