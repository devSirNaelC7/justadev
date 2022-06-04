import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';

export default function About() {
    return (
      <Stack  minH={'40vh'} direction={{ base: 'column', md: 'row' }} mt={{base:'20px', lg:'10px'}} >
        <Flex p={16} flex={1} align={'center'} justify={'flex-start'} direction={'column'} >
          	<Stack spacing={6} w={'full'} maxW={'lg'} >

            	<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
                	<Flex>
                    	<Text as={'span'} position={'relative'} color={'blue.400'}>
                        	01.
                    	</Text>
                    	<Text as={'span'} position={'relative'}>
                        	About Me
                    	</Text>
                	</Flex>
            	</Heading>

            	<Text fontSize={{ base: 'sm', lg: 'md' }} color={'gray.500'}>
            		Hello! My name is Naelson. And I like to solve problems involving 
            		programming, my interest came from the satisfaction that the 
            		lines of code gave me while solving problems to participate in 
            		programming competitions. My first contact with programming took 
            		place in high school, a vast unknown world that aroused my curiosity.
            	</Text>
          	</Stack>
        </Flex>
        <Flex flex={1} justify={'center'} align={'center'} >
            <Flex mt={'50px'} mb={'50px'}>
            </Flex>
        </Flex>
    </Stack>
    );
}
  