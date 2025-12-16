import {Ticket} from '../ticket-container/ticket/ticket'

export const TicketContainer = () =>{

    return (
        <>
            
            <div className='max-w-[20%] flex-1 rounded border border-gray-500 p-1 bg-gray-50'
            onDragOver={(e)=>e.preventDefault()}
            onDrop={(e)=>{
                e.preventDefault();
                const data=e.dataTransfer.getData("text/plain")
                if(data==="ticket"){
                    // onDropSuccess();
                
                }
            }}
            >
            <Ticket/>
            <Ticket/>
            </div>

        </>
    )
}