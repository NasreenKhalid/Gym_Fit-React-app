import React from 'react'
import SectionWrapper from './SectionWrapper'
import {WORKOUTS} from '../utils/swoldier'

function Header(props){
const {index, title, description,header} = props;
  
  return (
    <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
  )
}


const Generator = () => {
  return (
    <div>
      <SectionWrapper header={"generate your workout"}
      title={['It\'s','Huge','o\'clock']}
      >
       <Header index={'01'} title={"Pick your poison"} description={"Select the workout you wish to endure."} />
{Object.keys(WORKOUTS).map((type,typeIndex)=>{
  return (
    <button key={typeIndex}
    className="w-40 mx-auto bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg"
    >
      <p>{type}</p>
    </button>
  )
})}


<Header index={'02'} title={"Lock on targets"} description={"Select the workout you wish to endure."} />
{Object.keys(WORKOUTS).map((type,typeIndex)=>{
  return (
    <button key={typeIndex}
    className="w-40 mx-auto bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg"
    >
      <p>{type}</p>
    </button>
  )
})}
      </SectionWrapper>
    </div>
  )
}

export default Generator
