import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/service/serviceSlice';

const ServiceCard = () => {
    const { cart } = useSelector(state => state.service);
    // console.log(cart);
    const dispatch = useDispatch();



    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data.data))
    }, [])

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success("ADD TO CART");
    }

    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                services.map((item) => (
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