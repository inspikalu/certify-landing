'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const profiles = [
  {
    name: "Mbanefo ebuka",
    position: "Full-Stack Designer",
    image: "/cre8tiveebuka.png"
  },
  {
    name: "Nwakamma Dominion C.",
    position: "Mobile Developer",
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
  return (
    <div className="grid grid-rows-[1fr_1fr] relative bg-[#6C3ACA] p-6 text-white rounded-[30px] text-center h-[15rem] mx-4">
      <div>
        <div className="aspect-square w-[8rem] rounded-full absolute -top-[20%] left-[50%] -translate-x-1/2 border-[4px] border-[#BB86FC] overflow-hidden">
          <Image src={image} alt={name} fill />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-[1.5rem] uppercase whitespace-nowrap px-4 text-center">{name}</span>
        <span className="capitalize whitespace-nowrap block text-center text-sm mt-2">{position}</span>
      </div>
    </div>
  )
}

export default function Component() {
  const [duplicatedProfiles, setDuplicatedProfiles] = useState(profiles)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    // Set initial scroll position to the end
    marquee.scrollLeft = marquee.scrollWidth / 2

    const handleAnimation = () => {
      if (marquee.scrollLeft <= 0) {
        // When reaching the start, jump to the middle set of items
        marquee.scrollLeft = marquee.scrollWidth / 2
      } else {
        // Scroll to the left (reverse direction)
        marquee.scrollLeft -= 1
      }
    }

    const animationId = setInterval(handleAnimation, 20)

    // Cleanup interval on unmount
    return () => clearInterval(animationId)
  }, [])

  useEffect(() => {
    // Triple the profiles to ensure smooth looping
    setDuplicatedProfiles([...profiles, ...profiles, ...profiles])
  }, [])

  return (
    <div className="w-full overflow-x-hidden py-16">
      <div 
        ref={marqueeRef}
        className="flex overflow-x-hidden py-16 relative"
        style={{ scrollBehavior: 'auto' }} // Prevent smooth scrolling for the reset
      >
        <div className="flex">
          {duplicatedProfiles.map((profile, index) => (
            <ProfileCard key={`${profile.name}-${index}`} {...profile} />
          ))}
        </div>
      </div>
    </div>
  )
}
