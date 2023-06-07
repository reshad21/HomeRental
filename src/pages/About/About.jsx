import { BsPatchCheckFill } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="max-w-container mx-auto lg:px-5 2xl:px-0 px-5 mb-24 mt-12">
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#343F52] mb-2">
          About Us
        </h1>
        <p className="text-base text-[#343F52]">
          A company turning ideas into beautiful things.
        </p>
      </div>

      <div className="lg:flex lg:justify-between mt-12 lg:mt-20">
        <div className="flex flex-col gap-3 lg:w-2/4 w-full">
          <RxSpeakerLoud className="text-5xl text-blue-800" />
          <h1 className="lg:text-3xl text-xl font-bold text-[#343F52]">
            Who Are We?
          </h1>
          <p className="text-base text-[#343F52]">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>

          <p className="text-sm text-[#343F52]">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 lg:w-[550px] mt-12">
            <div className="flex gap-2">
              <BsPatchCheckFill className="text-[#1854b4] text-3xl" />
              <p className="text-[14px] text-[#343F52]">
                Aenean eu leo quam ornare curabitur blandit tempus.
              </p>
            </div>
            <div className="flex  gap-2">
              <BsPatchCheckFill className="text-[#1854b4] text-3xl" />
              <p className="text-[14px] text-[#343F52]">
                Aenean eu leo quam ornare curabitur blandit tempus.
              </p>
            </div>
            <div className="flex  gap-2">
              <BsPatchCheckFill className="text-[#1854b4] text-3xl" />
              <p className="text-[14px] text-[#343F52]">
                Aenean eu leo quam ornare curabitur blandit tempus.
              </p>
            </div>
            <div className="flex  gap-2">
              <BsPatchCheckFill className="text-[#1854b4] text-3xl" />
              <p className="text-[14px] text-[#343F52]">
                Aenean eu leo quam ornare curabitur blandit tempus.
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:mt-0 lg:pl-7 mt-12  md:w-[420px] md:h-[420px] md:mx-auto lg:mx-0">
          <img
            className="w-[390px] h-[400px]   rounded-md"
            src="https://sandbox.elemisthemes.com/assets/img/photos/about2.jpg"
            alt=""
          />

          <img
            className="w-[280px] h-[300px] lg:block md:block hidden rounded-md absolute top-[150px] -left-32 "
            src="https://sandbox.elemisthemes.com/assets/img/photos/about3.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="mt-24">
        <h1 className="lg:text-4xl text-2xl font-bold text-[#343F52] text-center">
          Here are 3 working steps to <br /> organize our business projects.
        </h1>

        <div className="lg:flex  lg:justify-between mt-16">
          <div className="lg:w-2/4 w-full">
            <h1 className="lg:text-3xl text-xl font-bold text-[#343F52]">
              How It Works?
            </h1>
            <p className="text-xl text-[#343F52] mt-3">
              We are a digital and branding company that believes in the power
              of creative strategy and along with great design.
            </p>

            <p className="text-sm text-[#343F52] mt-4">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </p>
            <p className="text-sm text-[#343F52] mt-4">
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla sed consectetur. Sed posuere consectetur est at lobortis.
              Vestibulum id ligula porta felis.
            </p>

            <button className="bg-[#3F78E0] text-white text-base mt-12  uppercase rounded-3xl px-6 py-3 hover:bg-bodyColor duration-300">
              Learn More
            </button>
          </div>

          <div className="flex flex-col gap-7 lg:mt-0 mt-12">
           
            <motion.div initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }} className="bg-white lg:w-[480px] w-full h-[120px] shadow-md border border-gray-100 rounded-md flex justify-center items-center ">
              <div className="flex items-center gap-6 p-4 ">
                <div className="flex justify-center items-center lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#E0E9FA] text-[#3F8AE7] lg:text-2xl text-xl">
                  <p>01</p>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-[#343F52]">
                    Collect Ideas
                  </h1>
                  <h1 className="text-sm font-normal mt-1 text-[#606990]">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </h1>
                </div>
              </div>
            </motion.div>

          <motion.div initial={{ x: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }} className="lg:ml-16 ml-0">
          <div className="bg-white lg:w-[480px] w-full h-[140px] shadow-md border border-gray-100 rounded-md flex justify-center items-center">
          <div className="flex items-center gap-6 p-4">
                <div className="flex justify-center items-center lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#E0E9FA] text-[#3F8AE7] lg:text-2xl text-xl">
                  <p>02</p>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-[#343F52]">
                    Collect Ideas
                  </h1>
                  <h1 className="text-sm font-normal mt-1 text-[#606990]">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </h1>
                </div>
              </div>
            </div>
          </motion.div> 
          
          
           <motion.div initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }} className="lg:ml-6 ml-0">
          <div className="bg-white lg:w-[480px] w-full h-[120px] shadow-md border border-gray-100 rounded-md flex justify-center items-center">
              <div className="flex items-center gap-6 p-4">
                <div className="flex justify-center items-center lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#E0E9FA] text-[#3F8AE7] lg:text-2xl text-xl">
                  <p>02</p>
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-[#343F52]">
                    Collect Ideas
                  </h1>
                  <h1 className="text-sm font-normal mt-1 text-[#606990]">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
