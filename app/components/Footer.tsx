import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-full bg-[#BB86FC] rounded-t-[50px] min-h-[10rem] p-[3rem] flex flex-col items-center justify-center">
      <span className="font-bold text-center text-[#333333] text-xl">Simply download the app and get to enjoy confidence in your products</span>
      <div>
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="#" className="block w-[140px] h-[42px] relative">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on App Store"
              fill
              className="object-contain"
            />
          </a>
          <a href="#" className="block w-[140px] h-[42px] relative">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              fill 
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
