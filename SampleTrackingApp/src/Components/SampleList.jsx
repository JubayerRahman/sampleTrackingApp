import axios from 'axios';
import React, { useContext, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { globalContent } from '../GlobalComponent';


function SampleList(props) {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')
  const {newSubmit, setNewSubmit} = useContext(globalContent)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Sample = props.sample


  const submitData = e =>{
    setLoading(true)
    e.preventDefault()
    const updatestatus = {status: data.status}
    console.log(updatestatus)
    
    
    axios.put(`https://sampleend.vercel.app/api/updateSample/${data._id}`, updatestatus)
    .then(res=> {
      setLoading(false)
      setNewSubmit(!newSubmit)
    })
    .catch(error=>console.log(error))
  }
  
  
  return (
    <div 
    className='bg-gradient-to-r from-slate-300 to-slate-400 mt-[10px] shadow-xl shadow-gray-400 p-[10px] rounded-md'
    >
        <h1 className='text-2xl'>Sample List:</h1>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="hover">
        <th className='text-samibold text-black text-lg'>SL no:</th>
        <th className='text-samibold text-black text-lg'>Image</th>
        <th className='text-samibold text-black text-lg'>Date </th>
        <th className='text-samibold text-black text-lg'>Item Name</th>
        <th className='text-samibold text-black text-lg'>Section</th>
        <th className='text-samibold text-black text-lg'>Size</th>
        <th className='text-samibold text-black text-lg'>Price</th>
        <th className='text-samibold text-black text-lg'>Remarks</th>
        <th className='text-samibold text-black text-lg'>Status</th>
      </tr>
    </thead>
    <tbody>

      {/* dynamic Sample */}
      {
        Sample.map((sample, index)=> 
        <tr className={`${sample.status=== "Complete"? "hover opacity-80":"hover"}`}>
        <td>{index +1}</td>
        <td><img src={sample.image} className='h-[30px]' alt="Currently unavailable" /></td>
        <td>{sample.date}</td>
        <td>{sample.itemNo}</td>
        <td>{sample.section}</td>
        <td>{sample.size}</td>
        <td>$ {sample.price}</td>
        <td>{sample.remarks}</td>
        <td onClick={()=>{document.getElementById('my_modal_4').showModal(), setData(sample)}} className='flex items-center gap-1 cursor-pointer'>{sample.status} <FaEdit/></td>
        </tr>)
      }
    </tbody>
  </table>

  <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form onSubmit={submitData} className='flex flex-row flex-wrap gap-2 justify-evenly mt-[20px]'>
                
                <select onChange={handleChange} value={data?.status || ""} name='status' className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%]'>
                    <option value="on progress">on progress</option>
                    <option value="Complete">Complete</option>
                </select>
                <input type="submit" value="Save" className='font-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-white p-[10px] rounded-md w-[98%] cursor-pointer hover:opacity-90' />
            </form>
                <h1 className={loading ? "p-[10px] block bg-green-600 w-fit mt-[10px] text-white rounded-md": "hidden"}> Loading....</h1>
        </div>
        </dialog>
</div>
    </div>
  )
}

export default SampleList