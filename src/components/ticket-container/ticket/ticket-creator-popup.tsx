import React from 'react';

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

      <div className="relative bg-gray-100 rounded w-[50%] h-[50%] p-4">
        <h1>Create Issue</h1>
      </div>
    </div>
        </>
    )
}