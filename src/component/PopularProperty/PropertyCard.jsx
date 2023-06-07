import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HitecCity from '../../assets/images/HitecCity.jpg';

const PropertyCard = () => {
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Card maxW='sm' _hover={{
                background: "white",
                color: "teal.500",
                boxShadow: '1px 2px 3px 1px #939393',
                transition: 'all 0.3s ease'
            }}>
                <CardBody>
                    <Image
                        src={HitecCity}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Hitec City</Heading>
                        <Text>
                            Starting Price: 5150
                        </Text>
                        <Text color='blue.600' fontSize='xl'>
                            48 Houses
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='teal'>
                            Explore Homes
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm' _hover={{
                background: "white",
                color: "teal.500",
                boxShadow: '1px 2px 3px 1px #939393',
                transition: 'all 0.3s ease'
            }}>
                <CardBody>
                    <Image
                        src={HitecCity}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Hitec City</Heading>
                        <Text>
                            Starting Price: 5150
                        </Text>
                        <Text color='blue.600' fontSize='xl'>
                            48 Houses
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='teal'>
                            Explore Homes
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm' _hover={{
                background: "white",
                color: "teal.500",
                boxShadow: '1px 2px 3px 1px #939393',
                transition: 'all 0.3s ease'
            }}>
                <CardBody>
                    <Image
                        src={HitecCity}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Hitec City</Heading>
                        <Text>
                            Starting Price: 5150
                        </Text>
                        <Text color='blue.600' fontSize='xl'>
                            48 Houses
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='teal'>
                            Explore Homes
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
            <Card maxW='sm' _hover={{
                background: "white",
                color: "teal.500",
                boxShadow: '1px 2px 3px 1px #939393',
                transition: 'all 0.3s ease'
            }}>
                <CardBody>
                    <Image
                        src={HitecCity}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>Hitec City</Heading>
                        <Text>
                            Starting Price: 5150
                        </Text>
                        <Text color='blue.600' fontSize='xl'>
                            48 Houses
                        </Text>
                    </Stack>
                </CardBody>

                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='teal'>
                            Explore Homes
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PropertyCard;