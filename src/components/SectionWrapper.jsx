import React from 'react'

const SectionWrapper = (props) => {
const {children, header,title} = props

  return (
    <section className="min-h-screen flex flex-col gap-10">
        <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center">
            <p className="uppercase font-medium">{header}</p>
            <h2 className="font-semibold text-3xl ">{title[0]}<span className="uppercase text-blue-400 px-4">{title[1]}</span><span>{title[2]}</span></h2>
        </div>
        <div className="mx-auto gap-10 w-full flex flex-col max-w-800">
        {children}
        </div>

    </section>
  )
}

export default SectionWrapper
