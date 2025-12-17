import React from 'react';
import { DropDownInput } from '../../input/drop-down-input';

export const KamelloTicketCreator = () => {
    return (
        <>
            {/* <dialog className='w-[50%] h-[50%] rounded bg-gray-100'>
                <h1>Create Issue</h1>
            </dialog> */}

<div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        // onClick={onClose}
      />

      <div className="relative bg-gray-100 rounded w-[50%] h-[70%] p-4 flex  flex-col gap-2">
        <h1 className='text-xl'>Create Issue</h1>
        <p className='text-sm'>Project<span className='text-red-700 font-semibold'>*</span></p>
        <DropDownInput/>
        <p className='text-sm'>Issue Type<span className='text-red-700 font-semibold'>*</span></p>
        <DropDownInput/>
        <p className='text-sm'>Summary<span className='text-red-700 font-semibold'>*</span></p>
        <input className='border border-gray-300 w-[60%] p-1 pl-2 outline-none' placeholder='Enter Summary'></input>
        <div className='absolute left-0  bottom-0  h-[50px] w-full flex justify-end'>
            
            <button type='submit' className=' rounded h-fit p-1 mt-2 pl-2 pr-2 bg-blue-600 font-semibold mr-5'>Create</button>
            <button type='submit' className=' rounded p-1 font-semibold mr-5'>Cancel</button>
        </div>
      </div>
    </div>
        </>
    )
}