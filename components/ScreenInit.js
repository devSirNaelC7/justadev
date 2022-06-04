import {
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function ScreenInit() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} mt={{base:'-120px', md:'-120px', lg:'-120px'}}>
		<Flex p={12} flex={1} align={'center'} justify={'flex-start'}>
			<Stack spacing={6} w={'full'} maxW={'3xl'} >
				<Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
            		<Text fontSize={{ base: '15px', md: '18px', lg: '21px' }}>
                		Hi, i'm
            		</Text>
            		<Text
              		as={'span'}
              		position={'relative'}
              		_after={{
                		content: "''",
                		width: 'full',
                		height: useBreakpointValue({ base: '20%', md: '30%' }),
                		position: 'absolute',
                		bottom: 1,
                		left: 0,
                		bg: 'blue.400',
                		zIndex: -1,
              			}}>
                  			devSirNaelC7.
            		</Text>
            		<br />
            		<Text color={'blue.400'} as={'span'}>
                		I create some things for the internet.
            		</Text>
          		</Heading>
          		<Stack maxW={'2xl'}>
            		<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                		I'm a computer technician specializing in building 
                		(and occasionally designing) exceptional digital 
                		experiences.Currently, I'm focused on studies in 
                		JavaScript, TypeScript, React.js and Next.js.
            		</Text>
          		</Stack>
        	</Stack>
      	</Flex>
    </Stack>
  );
}
