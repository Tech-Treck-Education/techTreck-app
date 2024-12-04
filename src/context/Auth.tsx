import React, { useState, createContext, ReactNode, useEffect } from 'react';
import { set } from 'react-hook-form';

interface AuthProviderProps {
	children: ReactNode;
}

export type RoutesType = 'Loading' | 'Auth' | 'App' | 'Onboarding';

interface AuthContextType {
	typeRoute: RoutesType;
	login: () => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
	typeRoute: 'Onboarding',
	login: async () => {},
	logout: () => {}
});

function AuthProvider({ children }: AuthProviderProps) {
	const [typeRoute, setTypeRoute] = useState<RoutesType>('Onboarding');

	async function login() {
		setTypeRoute('App');
	}

	useEffect(() => {
		setTypeRoute('Onboarding');
	}, []);

	function logout() {
		setTypeRoute('Auth');
	}

	return (
		<AuthContext.Provider value={{ login, logout, typeRoute }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthProvider, AuthContext };
