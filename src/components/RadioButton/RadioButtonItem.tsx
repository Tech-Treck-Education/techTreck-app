import React from 'react';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

import { RadioButton, RadioButtonProps } from './RadioButton';

export type RadioButtonItemProps = RadioButtonProps & {
	label: string;
	description?: string;
};
export function RadioButtonItem({
	label,
	description,
	...radioButtonProps
}: RadioButtonItemProps) {
	return (
		<Box paddingVertical="s16">
			<Box flexDirection="row" alignItems="center">
				<RadioButton {...radioButtonProps} />
				<Text bold ml="s12">
					{label}
				</Text>
			</Box>
			{description && (
				<Text style={{ width: '80%' }} color="primaryContrast">
					{description}
				</Text>
			)}
		</Box>
	);
}
