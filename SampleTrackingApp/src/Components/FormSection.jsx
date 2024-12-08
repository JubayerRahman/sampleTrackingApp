import axios from 'axios'
import React, { useContext, useState } from 'react'
import { globalContent } from '../GlobalComponent'

function FormSection() {

  const [loading, setLoading] = useState(false)
  const {newSubmit, setNewSubmit} = useContext(globalContent)

  const submitData = e =>{
    setLoading(true)
    e.preventDefault()
    const ImageURL = `https://api.imgbb.com/1/upload?key=b6b7235831a86487df684e8a814dd30c`
    const itemNo = e.target.itemNo.value 
    const size = e.target.size.value
    const price = e.target.price.value
    const section = e.target.section.value
    const image = e.target.image.files[0]
    const remarks = e.target.remarks.value

    
    const form = new FormData()
    form.append("image", image)
    axios.post(ImageURL, form, {
      headers:{
        "content-type": "multipart/form-data",
      }
    })
    .then(res=>
      { if(res?.data?.data?.display_url){
        setLoading(false)
        const img = res.data.data.display_url
        const status = "on progress"
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formattedDate = `${month}/${day}/${year}`;
        const data = {itemNo : itemNo, size: size, price, section, image:img, remarks, date: formattedDate, status}

        console.log(data);
        
        
        axios.post("https://sampleend.vercel.app/api/createSample", data)
        .then(res=> setNewSubmit(!newSubmit))
        .catch(err=>console.log(err))
        }
      })
    }

        

  return (
    <div className='w-full'>
        <div onClick={()=>document.getElementById('my_modal_3').showModal()} className='text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-white p-[10px] rounded-md text-center cursor-pointer hover:opacity-90 h-[200px] flex items-center justify-center pt-[5%] '>
          <h1>Add New</h1>
        </div>

        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form onSubmit={submitData} className='flex flex-col md:flex-row flex-wrap gap-2 justify-evenly mt-[20px]'>
                <input name="itemNo" className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]' type="text" placeholder='Item No.' />
                <input name="size" className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]' type="text" placeholder='Size' />
                <input name="price" className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]' type="text" placeholder='Price' />
                <select name='section' className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]'>
                    <option value="Narrow Fabric">Narrow Fabric</option>
                    <option value="Draw String">Draw String</option>
                    <option value="Heat Transfer">Heat Transfer</option>
                    <option value="Printed Fabric">Printed Fabric</option>
                    <option value="Screen Print">Screen Print</option>
                    <option value="Digital">Digital</option>
                    <option value="Pick & Pack">Pick & Pack</option>
                    <option value="Offset">Offset</option>
                    <option value="Poly">Poly</option>
                    <option value="Woven">Woven</option>
                    <option value="Thermal">Thermal</option>
                </select>
                <input name="image" className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]' type="file" placeholder='image' />
                <input name="remarks" className='text-xl p-[5px] border-gray-500 rounded-md border-2 w-[98%] md:w-[47%]' type="text" placeholder='Remarks' />
                <input type="submit" value="Save" className='font-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-white p-[10px] rounded-md w-[98%] cursor-pointer hover:opacity-90' />
            </form>
                <h1 className={loading ? "p-[10px] block bg-green-600 w-fit mt-[10px] text-white rounded-md": "hidden"}> Loading....</h1>
        </div>
        </dialog>
    </div>
  )
}

export default FormSection