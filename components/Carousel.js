import React from 'react';
import {
  Box,
  useBreakpointValue,
  Flex,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';

import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Java',
      text:
        "Java was the first language that I had contact with the world of programming, I didn't apply it in projects but I have the property to develop it if necessary.",

    },
    {
      title: 'Python',
      text:
        "Python is my favorite language, and also the one I'm most familiar with, used to solve programming exercises on the platforms: CodeWars and Beecrowd.",
 
    },
    {
      title: 'JavaScript',
      text:
        "JavaScript is the predominant language in web development, impossible to ignore, yet another endeavor, a new form of interpretation.",

    },
  ];
  	return (
	<Box
    position={'relative'}
	maxW={'md'}
	maxH={'sm'}
    overflow={'hidden'}
	justify={'center'}
	align={'center'}
	mt={{base:'0', md:'0', lg:'40px'}}
	>

		{/* CSS files for react-slick */}
		<link
			rel="stylesheet"
			type="text/css"
			charSet="UTF-8"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
		/>
		<link
			rel="stylesheet"
			type="text/css"
			href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
		/>
		
		
		{/* Slider */}
		<Slider {...settings} ref={(slider) => setSlider(slider)}>
			{cards.map((card, index) => (
			<Box
			key={index}
			height={'3xl'}
			backgroundPosition="center"
			mt={{base:'0px', md:'80px', lg:'80px'}}
			backgroundRepeat="no-repeat">
				{/* This is the block you need to change, to customize the caption */}
				<Container m={0} p={6} maxW={'lg'} h={'250px'} position="absolute" mt={{base:'0px', md:'80px', lg:'80px'}} >
					<Flex
					direction={'column'}
					w={'full'}
					maxH={'lg'}
					>
						<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
							{card.title}
						</Heading>
						<Text as={'span'} fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
							{card.text}
						</Text>
					</Flex>
				</Container>
			</Box>
			))}
		</Slider>
    </Box>
  );
}

