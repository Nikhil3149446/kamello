import profile from '../../../assets/profile-picture.png';
import {EpicContainer} from '../../epic/epic-container'
export const Ticket = ()=>{

    return (
        <>
            <div className='w-[96=7%] h-full max-h-[20%] flex-1 border border-gray-300 m-1 mb-2 rounded bg-white' draggable='true'
            onDragStart={(e)=>{
                e.dataTransfer.setData("text/plain","ticket");
            }}
            >
                <div className='flex flex-col justify-between h-full'>
                <div>
                <div className=''>
                    <p className='text-sm font-semibold mt-1 ml-2 '>Ticket Header</p>
                </div>
                <div className='font-semibold text-sm ml-2 mt-2 flex flex-col justify-between'>
                    <EpicContainer/>
                    <p className='text-gray-500'>Story Points 2</p>
                </div>
                </div>
                <div className='flex flex-row justify-between h-[30%]'>
                    <div className='flex flex-row gap-2 items-center'>
                    <input type='checkbox' className='m-2 ml-3'/>
                    <p className='text-xs font-semibold text-gray-500'>SCM</p>
                    </div>
                    <img src={profile} className='h-[70%] m-1 mr-2'></img>
                </div>
                </div>
            </div>
        </>
    )
}