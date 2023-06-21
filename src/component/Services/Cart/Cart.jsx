import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react';
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../features/service/serviceSlice';
const Cart = ({ action }) => {
  let { isOpen, onOpen, onClose } = action;
  const btnRef = React.useRef();


  const { cart } = useSelector(state => state.service);
  const dispatch = useDispatch();

  return (
    <div>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Total Service Need: {cart.length}</DrawerHeader>

          <DrawerBody>
            {
              (cart.length === 0) && <h1>Your cart is empty. Continue shopping..</h1>
            }
            {
              cart.map(item => (
                <div className="mb-2" key={item.id}>
                  <div className="flex justify-between items-center w-[100%] border-slate-700 border-2 rounded-md p-1">
                    <img src={item?.image} alt="" className='w-[40px] h-[40px] object-cover rounded' />
                    <h3 className='text-sm font-semibold'>{item?.name}</h3>
                    <p className='text-sm font-semibold'>Price: $<span className='font-bold'>{item?.price}</span></p>
                    <div>
                      <ButtonGroup size='sm' isAttached variant='outline'>
                        <Button colorScheme='pink' onClick={() => dispatch(removeFromCart(item))}><AiTwotoneDelete /></Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              ))

            }
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Cart