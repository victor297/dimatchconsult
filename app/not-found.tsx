import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image 
          src="/Photo.jpg" 
          alt="not-foundImage"
          height={200} 
          width={300}
          className="opacity-80 object-cover w-full md:h-[520px] h-[300px]"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-70 rounded-md"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center md:mt-[80px] mt-0 mb-0">
        <h2 className="text-white text-9xl font-extrabold md:mt-10 mt-0">404</h2>
        <h3 className="text-white text-3xl font-bold">Oops! Page not found!</h3>
        <p className="text-white pt-2">Leveling customer service for state of the art  customer service innovate product  for reliable supply</p>
        <p className="text-white">engage web services cutting-edge deliverables.</p>
        <a href="/" className="mt-4 bg-[#40DDB6] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back to home</a>
      </div>
    </div>
  );
};

export default page;  
