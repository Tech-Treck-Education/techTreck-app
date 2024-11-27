import { ViewStyle } from 'react-native';

import { createTheme } from '@shopify/restyle';

export const palette = {
	bluePrimary: '#0058FB',
	bluePrimaryLight: '#80ABFD',
	carrotSecondary: '#F86F2D',
	carrotSecondaryLight: '#FAE6DD',
	greenSuccess: '#4ABC86',
	greenSuccessLight: '#D8FFEC',
	redError: '#EA3838',
	redErrorLight: '#FBECEC',

	grayBlack: '#000000',
	gray1: '#636363',
	gray2: '#8E8E8E',
	gray3: '#B3B3B3',
	gray4: '#E1E1E1',
	gray5: '#F5F5F5',
	grayWhite: '#FFFFFF'
};

export const theme = createTheme({
	colors: {
		...palette,
		primary: palette.bluePrimary,
		primaryContrast: palette.grayWhite,

		buttonPrimary: palette.bluePrimary,

		background: palette.grayWhite,
		backgroundContrast: palette.grayBlack,

		error: palette.redError,
		errorLight: palette.redErrorLight,

		success: palette.greenSuccess,
		successLight: palette.greenSuccessLight,

		market: palette.carrotSecondary
	},

	spacing: {
		s0: 0,
		s4: 4,
		s8: 8,
		s10: 10,
		s12: 12,
		s14: 14,
		s16: 16,
		s20: 20,
		s24: 24,
		s32: 32,
		s40: 40,
		s48: 48,
		s56: 56,
		s60: 60
	},
	borderRadii: {
		s8: 8,
		s12: 12,
		s16: 16
	},
	textVariants: {
		defaults: {}
	}
});

export const $shadowProps: ViewStyle = {
	elevation: 2,
	shadowColor: '#000',
	shadowOpacity: 0.2,
	shadowRadius: 12,
	shadowOffset: {
		width: 5,
		height: 5
	}
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];