
const Contact = () => {
  return (
    <div className='relative '>
        
        <img className=' w-full h-[300px]' src="https://certapro.com/eastorlando/wp-content/uploads/sites/1573/2020/02/kitchen-2565105_1920-1920x636.jpg" alt="" />

          <div className='bg-white bg-transparent w-[250px] px-4 py-6 absolute top-[100px] left-16 rounded-sm shadow-lg'>

            <h1 className='text-3xl font-bold text-center text-[#0B2B3C]'>Contact Us</h1>
            <p className='text-sm font-normal text-center mt-2'>Home /contact</p>

         </div> 








   {/**************************** new contact from section start here ********************/}

   <div className="max-w-containerSmall mx-auto pt-10">
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-[#0B2B3C] font-Cuprum font-bold  text-center leading-5">
          Questions or Comments?
        </h1>
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-[#0B2B3C]  font-Cuprum font-bold  text-center pt-1 ">
          {" "}
          Get in Touch
        </h1>

        <form className="w-full pt-16 pb-16 p-4">
          <div className="lg:flex lg:gap-6  gap-y-14">
            <div className="w-full transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>

            <div className="w-full lg:pt-0 pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-6"
              />
            </div>
          </div>

          <div className="w-full pt-8 transform border-b-[1px] border-b-[#192E44] bg-transparent text-[#6B7885] duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Write your message"
              className="w-full border-none bg-transparent outline-none placeholder:font-Cuprum focus:outline-none pb-20"
            />
          </div>

          <div className="flex justify-center pt-8">
            <button className="px-6 py-2 font-medium font-Cuprum text-base bg-[#3657CD] text-white hover:bg-textYellow hover:text-black duration-300">
              Sent message
            </button>
          </div>
        </form>
      </div>

      {/**************************** new contact from section end here ********************/}










    </div>
  )
}

export default Contact