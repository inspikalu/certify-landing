import Image from "next/image"
const profiles = [
  {
    name: "Mbanefo ebuka",
    position: "Full-Stack Designer",
    image: "/cre8tiveebuka.png"
  },
  {
    name: "Nwakamma Dominion C.",
    position: "Mobile Develeoper",
    image: "/immadotdev.png"
  },
  {
    name: "Okereke C. Kalu",
    position: "Free Stack Olosho",
    image: "/inspikalu.png"
  },
  {
    name: "Ubadineke Prince",
    position: "Back-End Dev.",
    image: "/ubadineke.png"
  }
]
const ProfileCard = function({ name, position, image }: { name: string, position: string, image: string }) {
  return <div className="grid grid-rows-[1fr_1fr] relative bg-[#6C3ACA] p-6 text-white rounded-[30px] text-center ">
    <div>
      <div className="aspect-square w-[8rem] rounded-full absolute -top-[20%] left-[50%] -translate-x-1/2 border-[4px] border-[#BB86FC] overflow-hidden">
        <Image src={image} alt={name} fill />
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <span className="font-bold text-[2.5rem] uppercase whitespace-nowrap px-8 text-center">{name}</span>
      <span className="capitalize whitespace-nowrap block text-center">{position}</span>
    </div>
  </div>
}
const Profiles = () => {
  return (
    <div className="w-full min-h-[287px] flex items-center justify-center my-6 overflow-hidden py-3">
      <div className="w-full min-h-[287px] animate-marquee_reverse flex items-center justify-center gap-[20px]">
        {
          profiles.map((value, index) => { return <ProfileCard key={index} name={value.name} position={value.position} image={value.image} /> })
        }

      </div>
    </div>
  )
}

export default Profiles
