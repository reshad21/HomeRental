import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import carpenter from '../../assets/images/brush-wood-4536227_1280.jpg';
import electrician from '../../assets/images/electrician-3087536_1280.jpg';
import Painting from '../../assets/images/paintbrush-4577578_1280.jpg';
import plumber from '../../assets/images/plumbing-840835_1280.jpg';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../../features/service/serviceSlice';

const ServiceCard = () => {
    const dispatch = useDispatch();
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={carpenter}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Carpenter</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to='/checkout'>
                            <Button variant='solid' color="#fff" backgroundColor="#319795">
                                Buy now
                            </Button>
                        </Link>
                        <Button variant='ghost' colorScheme='blue' onClick={() => dispatch(increment())}>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={electrician}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Electrician</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to='/checkout'>
                            <Button variant='solid' color="#fff" backgroundColor="#319795">
                                Buy now
                            </Button>
                        </Link>
                        <Button variant='ghost' colorScheme='blue' onClick={() => dispatch(increment())}>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={plumber}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Plumber</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to='/checkout'>
                            <Button variant='solid' color="#fff" backgroundColor="#319795">
                                Buy now
                            </Button>
                        </Link>
                        <Button variant='ghost' colorScheme='blue' onClick={() => dispatch(increment())}>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={Painting}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Painting</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to='/checkout'>
                            <Button variant='solid' color="#fff" backgroundColor="#319795">
                                Buy now
                            </Button>
                        </Link>
                        <Button variant='ghost' colorScheme='blue' onClick={() => dispatch(increment())}>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ServiceCard;