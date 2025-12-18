import { Header } from './components/header/header'
import {TicketContainer} from './components/ticket-container/ticket-container'
import {SearchInput} from './components/input/search-input'
import {Profile} from './components/profile/profile'
import {DropDownInput} from './components/input/drop-down-input'
import { KamelloTicketCreator } from './components/ticket-container/ticket/ticket-creator-popup'
import { useState } from 'react'
function App() {
  const [showKamelloTicketCreator,setShowKamelloTicketCreator]=useState(false);
  const [isActiveTab,setIsActiveTab]=useState("");
  const [ticketTypes,setTicketTypes]=useState({
    'To_Do':'To_Do',
    'In_Progress':'In_Progress',
    'In_Testing':'In_Testing',
    'Pending_Release':'Pending_Release',
    'Done':'Done'
  })
  const [ticketTypesNumber,setTicketTypesNumber]=useState({
    'To_Do':[1,2],
    'In_Progress':[1],
    'In_Testing':[1,2,3,4],
    'Pending_Release':[],
    'Done':[1]
  })
  const [draggedTicket,setDraggedTicket]=useState('')
  function handleOnWorkTabClick(){
    setIsActiveTab('Your Work');
  }
  function handleOnProjectTabClick(){
    setIsActiveTab('Projects');
  }
  function handleOnFilterTabClick(){
    setIsActiveTab('Filter');
  }
  function handleOnDashboardClick(){
    setIsActiveTab('Dashboard');
  }

  
  return (
    <>
      <div className='flex flex-col w-full h-screen'>
        {showKamelloTicketCreator && <KamelloTicketCreator setShowKamelloTicketCreator={setShowKamelloTicketCreator}/>}
        <Header />
        <div className='mt-[40px] border-b flex flex-row'>
          <section className='flex flex-row gap-5 ml-4 text-sm'>
            <button className={`${isActiveTab==='Your Work'?'border-b-2 border-blue-600':''}`} onClick={()=>handleOnWorkTabClick()}>Your Work</button>
            <button className={`${isActiveTab==='Projects'?'border-b-2 border-blue-600':''}`} onClick={()=>handleOnProjectTabClick()}>Projects</button>
            <button className={`${isActiveTab==='Filter'?'border-b-2 border-blue-600':''}`} onClick={()=>handleOnFilterTabClick()}>Filter</button>
            <button className={`${isActiveTab==='Dashboard'?'border-b-2 border-blue-600':''}`} onClick={()=>handleOnDashboardClick()}>Dashboard</button>
          </section>
          <button className=' ml-[20px] rounded bg-blue-400 h-fit  p-[4px] pl-2 pr-2 mb-[2px]' onClick={()=>{setShowKamelloTicketCreator(true)}}>
                <p className='font-semibold text-sm'>Create</p>
          </button>
        </div>
        <h1 className='text-xl ml-4 mt-4'>Projects / Gravity</h1>
        <div className='relative flex flex-row items-center max-h-[10%] mt-4'>
        <SearchInput/>
        <Profile className='-ml-2 z-40'/>
        <Profile className='-ml-2 z-30'/>
        <Profile className='-ml-2 z-20'/>
        <Profile className='-ml-2 z-10'/>
        <Profile className='-ml-2 z-8' displayProfilePicture={false}></Profile>
        <div className='ml-[10%]'>
        <DropDownInput/>
        </div>
        <div className='absolute end-[40px] flex flex-row gap-3 items-center text-gray-600'>
          <p>Group By</p>
          <DropDownInput/>
        </div>
        </div>
        <div className='flex h-full w-full gap-4 p-4'>
        { Object.entries(ticketTypes).map(([key,value])=>{
          
        return <TicketContainer key={key} ticketContainerType={value} ticketNumbers={ticketTypesNumber[value]} setTicketTypesNumber={setTicketTypesNumber} draggedTicket={draggedTicket} setDraggedTicket={setDraggedTicket}/>
      })
        }
        
        </div>
      </div>
    </>
  )
}

export default App
