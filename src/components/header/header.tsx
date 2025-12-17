import profilePicture from '../../assets/profile-picture.png';
interface HeaderProps {
    setShowKamelloTicketCreator: (value: boolean) => void;
}

export const Header = ({ setShowKamelloTicketCreator }: HeaderProps) => {
    return (
        <>
            <div className='w-[100%] h-[42px] flex flex-row border justify-between items-center'>
               <div  className='flex flex-row items-center gap-3'>
                <h1 className='ml-4 text-3xl font-semibold'>Kamello</h1>
                <div className='ml-8'>
                
                </div>
               </div>
               <button className='rounded bg-blue-400 h-fit  pl-1 pr-1' onClick={()=>{setShowKamelloTicketCreator(true)}}>
                <p className='font-semibold text-sm'>Create</p>
               </button>
               <div className='p-1 flex flex-row gap-[10px] mr-[10px]'>
                <img src={profilePicture} className='w-[37px] h-full border rounded-[50%] '></img>
                <div className='h-6 w-px bg-gray-300 mt-[2px] pb-[2px]'></div>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferer' className='text-sm text-blue-400 mt-1'>Help</a>
               </div>
               
            </div>
        </>
    )
}