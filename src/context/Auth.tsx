import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToastService } from '@services';
import React, { useState, createContext, ReactNode, useEffect } from 'react';
import api, { AUTH_KEY } from 'src/services/api';
import { Credentials } from 'src/utils/Types';

interface AuthProviderProps {
	children: ReactNode;
}

interface AuthContextType {
	credentials: Credentials;
	login: (credentials: { email: string; password: string }) => Promise<void>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
	credentials: {
		token: ''
		// user: {
		// 	id: 0,
		// 	nome: '',
		// 	email: '',
		// 	senha: '',
		// 	createAt: '',
		// 	updateAt: ''
		// }
	},
	login: async () => {},
	logout: () => {}
});

function AuthProvider({ children }: AuthProviderProps) {
	const { showToast } = useToastService();

	const [credentials, setCredentials] = useState<Credentials>({
		token: ''
		// user: {
		// 	id: 0,
		// 	nome: '',
		// 	email: '',
		// 	senha: '',
		// 	createAt: '',
		// 	updateAt: ''
		// }
	});

	async function login({
		email,
		password
	}: {
		email: string;
		password: string;
	}) {
		try {
			const response = await api.post('/auth/login', {
				email: email,
				password: password
			});

			setCredentials({
				token: response.data.token
				// user: response.data.user
			});

			await AsyncStorage.setItem(
				AUTH_KEY,
				JSON.stringify({
					// email: response.data.user.email,
					// senha: response.data.user.password,
					token: response.data.token
				})
			);

			await setToken(response.data.token);

			showToast({
				message: 'Logado com sucesso',
				type: 'success',
				position: 'top'
			});
		} catch (error) {
			console.log('Login falhou.');
		}
	}

	async function setToken(token: string) {
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	useEffect(() => {
		async function loadStorageData() {
			const storage = await AsyncStorage.getItem(AUTH_KEY);

			if (storage) {
				const { email, senha, token } = JSON.parse(storage);

				setToken(token);

				setCredentials({
					token: token
					// user: {
					// 	id: 0,
					// 	nome: '',
					// 	email: email,
					// 	senha: senha,
					// 	createAt: '',
					// 	updateAt: ''
					// }
				});
			}
		}

		loadStorageData();
	}, []);

	function logout() {
		setCredentials({
			token: ''
			// user: {
			// 	id: 0,
			// 	nome: '',
			// 	email: '',
			// 	senha: '',
			// 	createAt: '',
			// 	updateAt: ''
			// }
		});
		AsyncStorage.removeItem(AUTH_KEY);
		api.defaults.headers.common.Authorization = null;
	}

	return (
		<AuthContext.Provider value={{ login, logout, credentials }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
