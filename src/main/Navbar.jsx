import { useDisclosure } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import { motion } from "framer-motion"
import { useState } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from '../component/Services/Cart/Cart'
import { logout } from '../features/auth/authSlice'
import auth from '../firebase/firebase.config'
const Navbar = () => {
  const { email } = useSelector(state => state.auth);
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      dispatch(logout());
    })
  }




  return (
    <div className=' h-[10vh]  w-full fixed top-0 left-0 right-0 z-30 bg-white shadow-md'>
      <div className='h-[10vh] flex justify-between items-center px-6 max-w-[1640px] mx-auto'>
        <div>
          <img src="https://sandbox.elemisthemes.com/assets/img/logo.png" alt="" />
        </div>

        <div className='relative lg:block hidden'>
          <input type="text" className='border w-[300px] h-[30px] rounded-3xl outline-none pl-4 text-[#343F52] font-normal text-[12px]' placeholder='Search' />

          <CiSearch className=' absolute top-[5px] right-3 text-xl cursor-pointer' />
        </div>

        <div className=' '>
          <div className='hidden lg:flex lg:gap-8 lg:items-center'>
            <motion.span initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Home</Link>
            </motion.span>

            <motion.span initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}>
              <Link to='/services' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Services</Link>
            </motion.span>

            <motion.span initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>About us</Link>
            </motion.span>

            <motion.span initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <Link to='/' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>List Your Property</Link>
            </motion.span>


            {

              email ?
                <motion.span initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  <Link onClick={handleSignOut} className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Logout</Link>
                </motion.span>
                :
                <>
                  <motion.span initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <Link to='/login' className='text-base text-[#0B2B3C] hover:text-[#3657cd]'>Login</Link>
                  </motion.span>


                  <Link to='/sing-up' className='singup-btn px-6 py-[6px] rounded shadow-sm cursor-pointer'>
                    <p className='text-base text-white'>Singnup</p>
                  </Link>

                </>

            }


            <span className='relative'>
              <BsFillCartCheckFill onClick={() => onOpen()} className='text-[#0B2B3C] text-2xl cursor-pointer' />
              <div className='w-4 h-4 rounded-full bg-blue-600 flex justify-center items-center absolute -top-[5px] left-3 '>
                <p className='text-white text-[10px]'>2</p>
              </div>
            </span>


          </div>
          <Cart action={{ isOpen, onOpen, onClose }} />

          {/* smail icon */}
          <div onClick={() => setShow(true)} className='w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-black cursor-pointer overflow-hidden group'>
            <span className='w-full h-[2px] bg-red-400 inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>

            <span className='w-full h-[2px] bg-red-400 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>

            <span className='w-full h-[2px] bg-red-400 inline-flex transform  translate-x-1 group-hover:translate-x-3  transition-all ease-in-out duration-300'></span>
          </div>



          {
            show && (
              <motion.div initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }} className='absolute lg:hidden top-0 right-0 w-full h-screen  flex flex-col items-end'>

                <div className='w-[80%] h-full  bg-[#112240] flex flex-col items-center px-4 py-10 z-50 relative'>


                  <IoMdClose onClick={() => setShow(false)} className='text-3xl cursor-pointer text-red-500 absolute top-4 right-4 duration-300' />


                  <div className='flex flex-col justify-center gap-5 items-center mt-14'>

                    <div className='relative'>
                      <input type="text" className='border w-[280px] h-[30px] rounded-3xl outline-none pl-4 text-[#343F52] font-normal text-[12px]' placeholder='Search' />

                      <CiSearch className=' absolute top-[5px] right-3 text-xl cursor-pointer' />
                    </div>

                    <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}>
                      <Link to='/' className='text-base text-white'>Home</Link>
                    </motion.span>

                    <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}>
                      <Link to='/' className='text-base text-white'>Services</Link>
                    </motion.span>

                    <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}>
                      <Link to='/' className='text-base text-white'>About us</Link>
                    </motion.span>

                    <motion.span onClick={() => setShow(false)} initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}>
                      <Link to='/login' className='text-base text-white'>Login</Link>
                    </motion.span>

                    <Link onClick={() => setShow(false)} to='/sing-up' className='singup-btn px-6 py-[6px] rounded shadow-sm cursor-pointer'>
                      <p className='text-base text-white'>Singup</p>
                    </Link>

                    <span className='relative'>
                      <BsFillCartCheckFill onClick={() => { onOpen(), setShow(false) }} className='text-white text-2xl cursor-pointer' />
                      <div className='w-4 h-4 rounded-full bg-blue-600 flex justify-center items-center absolute -top-[5px] left-3 '>
                        <p className='text-white text-[10px]'>2</p>
                      </div>
                    </span>
                  </div>

                </div>

              </motion.div>
            )
          }



        </div>



      </div>
    </div>
  )
}

export default Navbar