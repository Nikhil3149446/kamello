import profile from '../../assets/profile-picture.png'
export const Profile =({className="",displayProfilePicture=true})=>{
    return (
        <>
            <div className={`h-[50%]  ${className} border-2 rounded-3xl 2xl:h-[30%] flex items-center`}>
                {displayProfilePicture && <img src={profile} className={`h-full  w-full`}></img>}
                {!displayProfilePicture && <p className={`h-full  w-full bg-gray-300 rounded-3xl text-xs p-1`}>+34</p>}
            </div>
        </>
    )
}