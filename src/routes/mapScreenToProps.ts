import { IconProps } from '@components';
import { AppTabBottomTabParamList } from '@routes';

export const mapScreenToProps: Record<
	keyof AppTabBottomTabParamList,
	{
		label: string;
		icon: {
			focused: IconProps['name'];
		};
	}
> = {
	HomeScreen: {
		label: 'Início',
		icon: {
			focused: 'homeFill'
		}
	},

	ProjectScreen: {
		label: 'Projetos',
		icon: {
			focused: 'fileFill'
		}
	},
	RankingScreen: {
		label: 'Ranking',
		icon: {
			focused: 'fileFill'
		}
	},
	ProfileScreen: {
		label: 'Meu perfil',
		icon: {
			focused: 'profileFill'
		}
	}
};
