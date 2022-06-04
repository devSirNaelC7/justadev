import {
  Box,
  Text,
  VStack,
  Button,
  Icon,
  Link,
  Spacer,
  Flex,
  Divider,
  Heading,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';

import { BsGithub} from 'react-icons/bs';

export default function Footer() {
  return (
  	<Box as={Container} maxW="7xl" mt={14} p={16}>
      	<Grid
        templateColumns={{
        base: 'repeat(1, 1fr)',
    	sm: 'repeat(2, 1fr)',
    	md: 'repeat(2, 1fr)',
        }}
        gap={2}>
        	<GridItem colSpan={1}>
          		<VStack alignItems="flex-start" spacing="20px">
            		<Heading fontSize="3xl" fontWeight="700">
              			Just A Developer
            		</Heading>
					<Link href="https://github.com/devSirNaelC7/JustADev">
					<Button
					size='md'
					height='48px'
					width='200px'
					border='2px'
					borderColor='blue.500'
					colorScheme={'blue'}
					>
						Source Code <Spacer /> <Icon as={BsGithub} w={7} h={7}  />
					</Button>
					</Link>
          		</VStack>
        	</GridItem>
        	<GridItem>
			<Divider mt={1} mb={2} />
			<Flex>
				<Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} as={'span'} position={'relative'} color={'blue.400'}>
					The creation of this site came from 
					recreation, with the purpose of sketching 
					my portfolio while putting experiential learning 
					into practice.

				</Text>
			</Flex>
			</GridItem>
		</Grid>
	</Box>
  );
}
