import React from 'react';

import { Box, Button, Screen, Text } from '@components';

import { Image } from 'react-native';

import { images } from '@assets';

import { AuthScreenProps } from '@routes';
import { AppTabNavigator } from '@routes';

export function SignUpPlanScreen({
	navigation
}: AuthScreenProps<'SignUpPlanScreen'>) {

	return (
		<Screen canGoBack flex={1}>
			<Box mt="s24" mb="s40" gap="s20" alignItems='center' justifyContent='center'>
				
                <Text preset="headingMedium" color="bluePrimary" textAlign="center">
                Sua trilha escolhida foi de front-end!
                </Text> 
			
				<Text preset="paragraphMedium" textAlign="justify">
                    Você vai aprender os principais conceitos dessa vertente tecnológica. Confira um resumo. 
				</Text>

                <Box  gap="s20">
                    <Box flexDirection="row" gap="s24">
                        <Image
                            source={images.planLang1}
                            resizeMode="contain"
                        
                        />
                        <Text>
                            Html
                        </Text>
                    </Box>
                    
                    <Box flexDirection="row" gap="s24">
                        <Image
                            source={images.planLang2}
                            resizeMode="contain"
                        
                        />
                        <Text>
                            CSS
                        </Text>
                    </Box>
                    <Box flexDirection="row" gap="s24">
                        <Image
                            source={images.planLang3}
                            resizeMode="contain"
                        
                        />
                        <Text>
                            JavaScript
                        </Text>
                    </Box>
                    <Box flexDirection="row" gap="s24">
                        <Image
                            source={images.planLang4}
                            resizeMode="contain"
                        
                        />
                        <Text>
                            React
                        </Text>
                    </Box>
                    <Box flexDirection="row" gap="s24">
                        <Image
                            source={images.planLang5}
                            resizeMode="contain"
                        
                        />
                        <Text>
                            Angular
                        </Text>
                    </Box>
                    
                    
                </Box>
                
                <Button
                    mt="s40"
                    title="Ir para a trilha"
                    onPress={() => navigation.navigate('HomeScreen')}
                />
			</Box>
			
		</Screen>
	);
}
