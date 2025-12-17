import { Header } from './components/header/header'
import {TicketContainer} from './components/ticket-container/ticket-container'
import {SearchInput} from './components/input/search-input'
import {Profile} from './components/profile/profile'
import {DropDownInput} from './components/input/drop-down-input'
import { KamelloTicketCreator } from './components/ticket-container/ticket/ticket-creator-popup'
import { useState } from 'react'
function App() {
  const [showKamelloTicketCreator,setShowKamelloTicketCreator]=useState(false);
  return (
    <>
      <div className='flex flex-col w-full h-screen'>
        {showKamelloTicketCreator && <KamelloTicketCreator/>}
        <Header setShowKamelloTicketCreator={setShowKamelloTicketCreator}/>
        <h1 className='text-xl ml-4 mt-4'>Projects / Gravity</h1>
        <div className='flex flex-row items-center max-h-[10%] mt-4'>
        <SearchInput/>
        <Profile className='-ml-2 z-40'/>
        <Profile className='-ml-2 z-30'/>
        <Profile className='-ml-2 z-20'/>
        <Profile className='-ml-2 z-10'/>
        <Profile className='-ml-2 z-8' displayProfilePicture={false}></Profile>
        <div className='ml-[10%]'>
        <DropDownInput/>
        </div>
        </div>
        <div className='flex h-full w-full gap-4 p-4'>
        <TicketContainer />
        <TicketContainer />
        </div>
      </div>
    </>
  )
}

export default App
