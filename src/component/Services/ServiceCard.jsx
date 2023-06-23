import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetServicesQuery } from '../../features/api/apiSlice';
import { addToCart, addToCartTotalPrice } from '../../features/service/serviceSlice';

const ServiceCard = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetServicesQuery();
    if (isLoading === true) {
        return (
            <Stack direction='row' spacing={4} align='center'>
                <Button
                    isLoading
                    loadingText='Loading'
                    colorScheme='teal'
                    variant='outline'
                    spinnerPlacement='start'
                >
                    Submit
                </Button>
            </Stack>
        )
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        dispatch(addToCartTotalPrice());
        toast.success("ADD TO CART");
    }

    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                data?.data.map((item) => (
                    <Card maxW='sm' key={item.id}>
                        <CardBody>
                            <Image
                                src={item.image}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{item.name}</Heading>
                                <Text>
                                    {item.details}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {item.price}
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
                                <Button variant='ghost' colorScheme='blue' onClick={() => handleAddToCart(item)}>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))
            }
        </div>
    );
};

export default ServiceCard;