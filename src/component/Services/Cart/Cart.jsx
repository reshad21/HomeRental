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
import { decrement } from '../../../features/service/serviceSlice';
const Cart = ({ action }) => {
  let { isOpen, onOpen, onClose } = action;
  const btnRef = React.useRef();


  const { value } = useSelector(state => state.service);
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
          <DrawerHeader>Total Service Need: {value}</DrawerHeader>

          <DrawerBody>
            {
              (value === 0) && <h1>Your cart is empty. Continue shopping..</h1>
            }
            {
              (value > 0) &&
              <div className="">
                <div className="flex justify-between items-center w-[100%] border-slate-700 border-2 rounded-md p-1">
                  <img src="" alt="" className='w-[40px] h-[40px] object-cover rounded' />
                  <h3 className='text-sm font-semibold'>Carpenter</h3>
                  <p className='text-sm font-semibold'>Price: <span className='font-bold'>$450</span></p>
                  <div>
                    <ButtonGroup size='sm' isAttached variant='outline'>
                      <Button colorScheme='pink' onClick={() => dispatch(decrement())}><AiTwotoneDelete /></Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
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