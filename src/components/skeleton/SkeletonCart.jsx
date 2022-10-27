import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCart = () => {
  return (
    <div>
         <div className="hidden md:flex items-center -mx-8 px-6 py-5">
          <div className="flex w-2/5">
            <div className="w-22">
              <Skeleton width={100} height={100}/>
            </div>
            <div className="flex flex-col justify-center gap-5 ml-4 flex-grow">
              <Skeleton width={120} />
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <Skeleton width={40} />
          </div>
          <div className="flex justify-between w-1/4 ml-16">
          <Skeleton width={35}/>
          <Skeleton width={40}/>
          </div>
        </div>

         <div className="md:hidden border-t pb-5">
         <div className="flex w-full mt-3">
         <div className="w-50">
            <Skeleton width={80} height={120} />
          </div>
         <div>
             <div className="flex flex-col ml-3 flex-grow">
               <Skeleton width={150}/>
             </div>
             <div className="flex flex-col justify-start items-start ml-3 flex-grow mt-4">
             <Skeleton width={100}/>
             </div>
             <div className="ml-3 mt-4">
             <Skeleton width={80}/>
             </div>
             </div>
           </div>
           <div>
           <div className="flex justify-end w-full gap-4">
            <Skeleton width={20} />

            <Skeleton width={20}/>
            <Skeleton width={20} />
          </div>
           </div>
           </div>
    </div>
  )
}

export default SkeletonCart