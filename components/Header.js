import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['About', 'Experience', 'Contact'];

const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      	<Box px={4}>
        	<Flex h={16} alignItems={'center'} justifyContent={'space-between'} direction={'row-reverse'} ml={{base:'15px', md:'30px', lg:'80px'}} mr={{base:'20px', md:'40px', lg:'70px'}}>
          		<IconButton
            	size={'md'}
            	icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            	aria-label={'Open Menu'}
            	display={{ md: 'none' }}
            	onClick={isOpen ? onClose : onOpen}
          		/>
          		<HStack spacing={8} alignItems={'center'}>
            
            		<HStack
              		as={'nav'}
              		spacing={4}
              		display={{ base: 'none', md: 'flex' }}>
              		{Links.map((link) => (
                		<NavLink key={link}>{link}</NavLink>
              		))}
            		</HStack>
          		</HStack>
          		<Flex alignItems={'center'}>
              		<Box>JustADev</Box>
          		</Flex>
        	</Flex>

        	{isOpen ? (
          	<Box pb={4} display={{ md: 'none' }}>
            	<Stack as={'nav'} spacing={4}>
             		{Links.map((link) => (
                	<NavLink key={link}>{link}</NavLink>
              	))}
            	</Stack>
          	</Box>
        	) : null}
      	</Box>
    </>
	);
}
