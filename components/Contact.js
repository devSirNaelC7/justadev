import {
	Box,
	Button,
  	Flex,
  	Text,
  	FormControl,
  	FormLabel,
  	Heading,
  	IconButton,
  	Input,
  	InputGroup,
  	InputLeftElement,
  	Link,
  	Stack,
  	Textarea,
  	Tooltip,
  	useClipboard,
  	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsPerson, BsWhatsapp } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';


export default function Contact() {
  	const { hasCopied, onCopy } = useClipboard('sirnaelc7@gmail.com');

  	return (
	  	<Flex align="center" justify="center" id="contact">
			<Box
		  	borderRadius="lg"
		  	m={{ base: 5, md: 16, lg: 10 }}
		  	p={{ base: 5, lg: 16 }}>
			  	<Box>
				 	<VStack spacing={{ base: 4, md: 8, lg: 20 }}>
					  	<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
						  	<Flex>
								<Text color={'blue.400'}>
									03.
								</Text>
								<Text>
									Get in Touch
								</Text>
						  	</Flex>
					  	</Heading>
					  	<Stack
					  	spacing={{ base: 4, md: 8, lg: 20 }}
					  	direction={{ base: 'column', md: 'row' }}>
					  		<Stack
							align="center"
							justify="space-around"
							direction={{ base: 'row', md: 'column' }}>
								<Tooltip
								label={hasCopied ? 'Email Copied!' : 'Copy Email'}
								closeOnClick={false}
								hasArrow>
									<IconButton
									aria-label="email"
									variant="ghost"
									size="lg"
									fontSize="3xl"
									icon={<MdEmail />}
									_hover={{
										bg: 'blue.500',
									}}
									onClick={onCopy}
									isRound
									/>
								</Tooltip>

								<Link href="https://github.com/devSirNaelC7">
									<IconButton
									aria-label="github"
									variant="ghost"
									size="lg"
									fontSize="3xl"
									icon={<BsGithub />}
									_hover={{
										bg: 'blue.500',
									}}
									isRound
									/>
								</Link>

								<Link href="https://api.whatsapp.com/send?phone=5584998318698&text=Fala%20Tu!">
									<IconButton
									aria-label="twitter"
									variant="ghost"
									size="lg"
									icon={<BsWhatsapp size="28px" />}
									_hover={{
										bg: 'blue.500',
									}}
									isRound
									/>
								</Link>

								{/*<Link href="#">
								<IconButton
									aria-label="linkedin"
									variant="ghost"
									size="lg"
									icon={<BsLinkedin size="28px" />}
									_hover={{
									bg: 'blue.500',
									}}
									isRound
								/>
								</Link>*/}
							</Stack>
							<Box
							borderRadius="lg"
							p={8}
							shadow="base">
								<VStack spacing={5}>
									<FormControl isRequired>
										<FormLabel>Name</FormLabel>
										<InputGroup>
											<InputLeftElement icon={<BsPerson size="28px" />}/>
											<Input 
											type="text" 
											name="name" 
											placeholder="Your Name" 
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Email</FormLabel>

										<InputGroup>
											<InputLeftElement icon={<MdOutlineEmail size="28px" />}/>
											<Input
											type="email"
											name="email"
											placeholder="Your Email"
											/>
										</InputGroup>
									</FormControl>

									<FormControl isRequired>
										<FormLabel>Message</FormLabel>

										<Textarea
										name="message"
										placeholder="Your Message"
										rows={6}
										resize="none"
										/>
									</FormControl>

									<Button
									colorScheme="blue"
									bg="blue.400"
									color="white"
									_hover={{
									bg: 'blue.500',
									}}
									isFullWidth>
										Send Message
									</Button>
							  	</VStack>
						  	</Box>
					 	</Stack>
				  	</VStack>
		  	  	</Box>
		  	</Box>
	 	</Flex>
  );
}
