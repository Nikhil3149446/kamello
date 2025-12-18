import {Ticket} from '../ticket-container/ticket/ticket'
interface TicketContainerProps{
    ticketContainerType:any;
    ticketNumbers:any;
    setTicketTypesNumber:any;
    draggedTicket:any;
    setDraggedTicket:any;
}
export const TicketContainer = ({ticketContainerType,ticketNumbers,setTicketTypesNumber,draggedTicket,}:TicketContainerProps) =>{
    
    return (
        <>
            
            <div className='max-w-[20%] flex-1 rounded border border-gray-500 p-1 bg-gray-50'
            onDragOver={(e)=>e.preventDefault()}
            onDrop={()=>{
                setTicketTypesNumber({...ticketNumbers,ticketContainerType:[...ticketNumbers,1],draggedTicket:[]})
            }}
            >
            <div className='text-gray-600 font-semibold m-2 mb-4'>
                <p>{ticketContainerType}</p>
            </div>
            {ticketNumbers.map(()=>{
                {console.log("The value of ticketNumbers is ",ticketNumbers)}
            return <Ticket/>
        })
            }
            </div>

        </>
    )
}