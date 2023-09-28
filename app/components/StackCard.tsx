import { Card, CardBody, Heading, Text, Flex, Tooltip } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import Image from 'next/image';
import { StarIcon } from "@chakra-ui/icons";

export default function StackCard({ title, describe, imageUrl, backgroundColor, favorite }) {
    return (
        <Card
            width='80' 
            direction={{ base: 'column', sm: 'row' }} 
            padding='15px' 
            align='center' 
            gap='15px'
            backgroundColor='gray.800'
            borderRadius='15px'
            cursor='pointer'
            border='1px'
            borderColor='gray.700'
            transitionDuration='0.4s'
            flexDirection='row'
            _hover={{
                shadow: 'md',
                transform: 'translateY(-5px)',
                transitionDuration: '0.4s',
                transitionTimingFunction: "ease-in-out"
            }}
        >   
            {favorite && (
                <Tooltip label='favorite stack'>
                    <StarIcon position='absolute' top='2' right='2' color='yellow.500' />
                </Tooltip>
            )}            
            <Flex height='50px' width='50px' padding='10px' borderRadius='0.375rem' backgroundColor={backgroundColor}>
                <Image style={{objectFit: "contain"}}	 src={imageUrl} alt='stack icon' />
            </Flex>
            <CardBody textAlign='left' padding='0'>
                <Heading size='md' color='green.400'>{title}</Heading>

                <Text  color='whiteAlpha.700' padding='0'>
                    {describe}
                </Text>
            </CardBody>
        </Card>
    )
}

StackCard.propTypes = {
    title: PropTypes.string
};