
const SVG = function() {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.936676 17.5C9.43668 17.5 17.9367 9 17.9367 0.5C17.9367 9 26.4367 17.5 34.9367 17.5C26.4367 17.5 17.9367 26 17.9367 34.5C17.9367 26 9.43668 17.5 0.936676 17.5Z" fill="white" fillOpacity="0.5" />
    </svg>
  )
}

const Marquee = () => {
  return (
    <section className="w-full min-h-[107px] bg-[#C082FD] overflow-hidden mt-[40px] mb-[40px]" id="key_features">
      {/*<div className="animate-marquee">Hello world</div>*/}
      <div className="w-full h-full min-h-[107px] animate-marquee flex items-center justify-center gap-[20px]">
        {
          ["scan", "verify", "track products", "transfer ownership"].map((item, index) => {
            return (<div key={index} className="flex items-center justify-center capitalize gap-[20px] text-white font-bold text-[1.6rem]"><SVG />{item}</div>)
          })
        }
      </div>
    </section>

  )
}

export default Marquee
