import classNames from 'classnames';
import React from 'react';

const multiSelectAllValue = '$react-select-internal-select-all$';

function selectAllRenderer ({
	focusedOption,
	instancePrefix,
	labelKey,
	onFocus,
	onSelect,
	optionClassName,
	optionComponent,
	optionRenderer,
	valueArray,
	valueKey,
	onOptionRef
}) {
	let Option = optionComponent;
	const options = [{ key: multiSelectAllValue, label: 'Select All' }];
	return options.map((option, i) => {
		let isSelected = valueArray && valueArray.indexOf(option) > -1;
		let isFocused = option === focusedOption;
		let optionClass = classNames(optionClassName, {
			'Select-option': true,
			'is-selected': isSelected,
			'is-focused': isFocused,
			'is-disabled': option.disabled,
		});

		return (
			<Option
				className={optionClass}
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
