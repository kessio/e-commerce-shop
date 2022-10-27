import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonProducts = () => {
 
   return(
    <>
      <div className="flex flex-col w-full max-w-lg mx-auto">
        <div className="object-cover w-full rounded-md">
        <Skeleton className="object-cover w-full rounded-md h-72 xl:h-80 p-12" />
        </div>
        <div className="">
        <Skeleton className="mt-2 font-medium text-gray-700 dark:text-gray-200" height={30} />
        <Skeleton  width={80} height={20} />
        <Skeleton className="w-full px-2 py-2 mt-4" />
        </div>
    </div>
</>
        
    )
  
    
  
}

export default SkeletonProducts