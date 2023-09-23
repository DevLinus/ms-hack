"use client";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, CogIcon, HeartIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, PaperClipIcon } from '@heroicons/react/20/solid'
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const engagement = [
  { name: 'Suche', href: '/ActivitySearch', icon: MagnifyingGlassIcon },
  { name: 'Entdecke', href: '/activities/', icon: UsersIcon },
  { name: 'likes', href: '#', icon: HeartIcon },
  { name: 'Erstellen', href: '#', icon: PaperClipIcon },
  { name: 'letzte events', href: '#', icon:  BriefcaseIcon},
]
const resources = [
  { name: 'AGB', href: '#', icon: GlobeAltIcon },
  { name: 'Impressum', href: '#', icon: BookOpenIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
  { name: 'Settings', href: '#', icon: CogIcon },
]


export default function BurgerIcon() {
  return (
    <Popover className=" isolate z-50 shadow ">
      <div className="bg-white py-5">
        <div className='flex'>
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Popover.Button className="inline-flex items-center align-bottom gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            
            <ChevronDownIcon className="h-10 w-10" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="mr-0 ml-auto max-w-7xl px-6 lg:px-8 align-top ">
        <img className="mr-0 ml-auto  h-auto w-2/12 " src='racoon.png'></img>

        </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500"></h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {engagement.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        <item.icon className="h-6 w-6  text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium leading-6 text-gray-500"></h3>
                <div className="mt-6 flow-root">
                  <div className="-my-2">
                    {resources.map((item) => (
                      <a
                        key={item.name + '2'}
                        href={item.href}
                        className="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900"
                      >
                        <item.icon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img className="mr-0 ml-auto  h-auto w-6/12 " src='racoon.png'></img>
            </div>
         
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
