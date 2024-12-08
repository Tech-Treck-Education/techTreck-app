import { Box } from '../Box/Box';
import { Image } from '../Image/Image';
import { Text } from '../Text/Text';

export function TopThree() {
	return (
		<Box
			flexDirection="row"
			justifyContent="center"
			alignItems="flex-end"
			alignContent="center"
		>
			<Box alignItems="center" gap="s10">
				<Image
					imageURL="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					height={40}
					width={40}
					borderRadius={20}
				/>
				<Box
					width={100}
					height={100}
					bg="redError"
					justifyContent="center"
					alignItems="center"
					alignContent="center"
				>
					<Text
						preset="headingSmall"
						color="grayWhite"
						style={{ fontWeight: '800' }}
					>
						#1
					</Text>
					<Text preset="headingSmall" color="grayWhite">
						2340xp
					</Text>
				</Box>
			</Box>
			<Box alignItems="center" gap="s10">
				<Image
					imageURL="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					height={40}
					width={40}
					borderRadius={20}
				/>
				<Box
					width={100}
					height={150}
					bg="yellowSecondary"
					justifyContent="center"
					alignItems="center"
					alignContent="center"
				>
					<Text
						preset="headingSmall"
						color="grayWhite"
						style={{ fontWeight: '800' }}
					>
						#2
					</Text>
					<Text preset="headingSmall" color="grayWhite">
						2340xp
					</Text>
				</Box>
			</Box>
			<Box alignItems="center" gap="s10">
				<Image
					imageURL="https://plus.unsplash.com/premium_photo-1690295364571-d2d06159e0a7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					height={40}
					width={40}
					borderRadius={20}
				/>
				<Box
					width={100}
					height={80}
					bg="blueTertiary"
					justifyContent="center"
					alignItems="center"
					alignContent="center"
				>
					<Text
						preset="headingSmall"
						color="grayWhite"
						style={{ fontWeight: '800' }}
					>
						#3
					</Text>
					<Text preset="headingSmall" color="grayWhite">
						2340xp
					</Text>
				</Box>
			</Box>
		</Box>
	);
}
