export type VagaProps = {
	id: number;
	status: String;
	title: String;
	date: String;
	description: String;
	phone: String;
	company: String;
};

export type RootStackParamList = {
	Login: undefined;
	FormScreen: undefined;
	Home: undefined;
	Profile: undefined;
	Details: { id: number };
};

export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	level: number;
	score: number;
	createdAt: string;
	updatedAt: string;
}

export interface Credentials {
	token: string;
	user: User;
}
