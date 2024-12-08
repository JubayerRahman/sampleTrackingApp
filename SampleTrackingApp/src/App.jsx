import { useContext, useEffect, useState } from 'react'
import FormSection from './Components/FormSection'
import SampleList from './Components/SampleList'
import axios from 'axios'
import GlobalComponent, { globalContent } from './GlobalComponent'

function App() {

  const [samples, setSamples]= useState([])
  const [onProcess, setonProcess]= useState(null)
  const {newSubmit, setNewSubmit} = useContext(globalContent)

  
  useEffect(()=>{
        axios.get("https://sampleend.vercel.app/api/createSample")
        .then(res=> setSamples(res.data.data))
        .catch(err=>console.log(err))
        axios.get("https://sampleend.vercel.app/api/createSample/onProcess")
        .then(res=> setonProcess(res.data?.data[0]?.OnProcessSamples || 0))
        .catch(err=>console.log(err))
  },[newSubmit])

  console.log(newSubmit);
  

  return (
    <div className='p-[10px]'>
      <div className='flex flex-col md:flex-row w-full justify-evenly gap-2'>
        <div className='md:w-[33%]'>
        <FormSection/>
        </div>
        <div className='text-4xl font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white p-[10px] rounded-md text-center cursor-pointer hover:opacity-90 h-[200px] flex items-center justify-center md:w-[33%]'> <h1>Total Samples:{samples.length}</h1></div>
        <div className='text-4xl font-semibold bg-gradient-to-r from-emerald-500 to-emerald-900 text-white p-[10px] rounded-md text-center cursor-pointer hover:opacity-90 h-[200px] flex items-center justify-center md:w-[33%]'><h1>On Process: {onProcess}</h1></div>
      </div>
      <SampleList sample ={samples}/>
    </div>
  )
}

export default App
