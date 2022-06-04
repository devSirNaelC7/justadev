import {
  Flex,
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

import Carousel from '../components/Carousel'

export default function ScreenSkills() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} mt={{base:'0', md:'-40px', lg:'-40px'}}>
		<Flex p={16} flex={1} align={'center'} justify={'center'} direction={'column-reverse'} mt={{base:'0', md:'-40px', lg:'-40px'}}>
			<Stack spacing={6} w={'full'} maxW={'lg'} >
				<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
					<Flex>
						<Text as={'span'} position={'relative'} color={'blue.400'}>
							02.
						</Text>
						<Text as={'span'} position={'relative'}>
							Experience
                    	</Text>
                	</Flex>
          		</Heading>
            	<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
					I &apos;m at the beginning of my journey as a frontend developer, 
					a junior or something looking for the fullstack title. 
					Somewhere on this page there are illustrations of the 
					technologies I &apos;ve done well while coding.
          		</Text>
        	</Stack>
      	</Flex>
    	<Box flex={1} justify={'center'} align={'center'} >
            <Carousel />
        </Box>
    </Stack>
  );
}
