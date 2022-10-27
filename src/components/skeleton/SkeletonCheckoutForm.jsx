import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCheckoutForm = () => {
  return (
    <form className="w-full border-t max-w-lg mt-20 md:ml-20 ">
    <div className="flex flex-wrap -mx-3 mb-6 pt-10">
      <div className="w-100 md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
          <Skeleton width={80} />
        </label>
        <Skeleton width={150} height={43} />
      </div>
      <div className="w-100 md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        <Skeleton width={80} />
        </label>
        <Skeleton width={150} height={43}/>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-address">
        <Skeleton width={100} />
        </label>
        <Skeleton width={200} height={43} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
        <Skeleton width={100} />
        </label>
        <Skeleton width={200} height={43} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-country">
        <Skeleton width={50} />
        </label>
        <div className="relative">
        <Skeleton width={100} height={43} />
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        <Skeleton width={50} />
        </label>
        <div className="relative">
        <Skeleton width={100} height={43} />
        </div>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        <Skeleton width={50} />
        </label>
        <div className="relative">
        <Skeleton width={100} height={43} />
        </div>
      </div>
      <div className="w-1/2 mt-10">
      <Skeleton width={200} height={43} />
      </div>
      </div>
      </form>
  )
}

export default SkeletonCheckoutForm