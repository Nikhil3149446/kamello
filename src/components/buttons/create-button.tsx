// interface CreateKamelloTicketButtonProps {
//     setKamelloTicketCreator: React.MutableRefObject<{ open: () => void }>;
// }

export const CreateKamelloTicketButton = () => {
    return (
        <>
            <button className='rounded bg-blue-400 h-fit  pl-1 pr-1' onClick={()=>{}}>
                <p className='font-semibold text-sm'>Create</p>
            </button>
        </>
    )
}