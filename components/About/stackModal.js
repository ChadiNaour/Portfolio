// export default StackModal;
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Icon } from '@iconify/react';

export default function StackModal({isOpen, setIsOpen, MainStack}) {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%]transform overflow-hidden align-middle shadow-xl transition-all z-50 h-full flex justify-center items-center">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="bg-[#312E2E] w-[95%] rounded-lg shadow relative">
             <div className="flex items-center justify-center p-5 ">
              <span className='text-white font-reloadLight text-lg text-center'>MAIN STACK</span>
            </div>
        <div className="flex flex-wrap justify-center items-center gap-4 pb-5 ">
              {
                MainStack.map((stack, index) => (
                  stack.name == "Javascript" || stack.name == "Typescript" ?
                    <div key={index} className='relative z-50 cursor-pointer flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center'>
                      <Icon className="w-[75%] h-[75%] rounded-md" icon={stack.Icon} />
                      <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                        {stack.name}
                      </span>
                    </div> : stack.name == "NextJs" ? <div key={index} className='relative  z-50 cursor-pointer flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center'>
                      <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} color="white" />
                      <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                        {stack.name}
                      </span>
                    </div> : <div key={index} className='relative cursor-pointer  z-50 flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center '>
                      <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} />
                      <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                        {stack.name}
                      </span>
                    </div>
                ))
              }
            </div>
          </div>
        </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

{/* <Dialog.Panel className="z-50 absolute overflow-x-hidden overflow-y-auto h-full bg-black bg-opacity-75 w-full flex justify-center items-center">
<div className="relative w-full max-w-2xl px-4  h-full md:h-auto mt-10 flex justify-center items-center">
  <div className="bg-[#312E2E] w-[95%] rounded-lg shadow relative">
     <div className="flex items-center justify-center p-5 ">
      <span className='text-white font-reloadLight text-lg text-center'>MAIN STACK</span>
    </div>
<div className="flex flex-wrap justify-center items-center gap-4 pb-5 ">
      {
        MainStack.map((stack, index) => (
          stack.name == "Javascript" || stack.name == "Typescript" ?
            <div key={index} className='relative z-50 cursor-pointer flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center'>
              <Icon className="w-[75%] h-[75%] rounded-md" icon={stack.Icon} />
              <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                {stack.name}
              </span>
            </div> : stack.name == "NextJs" ? <div key={index} className='relative  z-50 cursor-pointer flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center'>
              <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} color="white" />
              <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                {stack.name}
              </span>
            </div> : <div key={index} className='relative cursor-pointer  z-50 flex justify-end items-center group h-16 w-16 rounded-md bg-[#403D3D] flex justify-center items-center '>
              <Icon className=" w-[75%] h-[75%]" icon={stack.Icon} />
              <span className="absolute z-50 inline-block font-cinetype scale-0 group-hover:scale-100 -top-10 py-2 px-3 text-sm font-medium text-white bg-graye rounded-lg shadow-sm duration-300 ">
                {stack.name}
              </span>
            </div>
        ))
      }
    </div>
  </div>
</div>
        </Dialog.Panel> */}