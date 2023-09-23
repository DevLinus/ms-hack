"use client";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'


const sortOptions = [
  { name: 'Am Beliebtesten', href: '#', current: true },
  { name: 'Beste Bewertung', href: '#', current: false },
  { name: 'Neueste', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const filters = [
    { id: 1, name: 'keine überdachten Aktivitäten' },
    { id: 2, name: 'keine Freiluft Aktivitäten' },
    { id: 3, name: 'kein Ballsport' },
    
  ]

export default function SearchMenu() {
  return (
    <div className="bg-white">
      <div className="px-4 pt-16 pb-5 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Finde deine Aktivität</h1>
        <input
                type="text"
                name="card-expiration-date"
                id="card-expiration-date"
                className="relative mt-5 text-center block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="..."
                />
                <button
        type="button"
        className="rounded-none rounded-bl-md bg-black px-3.5 mt-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
      >
        Suchen ...
      </button>
      </div>

      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-b border-t border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filter
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                Filters
              </Disclosure.Button>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500">
                Filter zurücksetzen
              </button>
            </div>
          </div>
        </div>
        <Disclosure.Panel className="border-t border-gray-200 py-10">
          <div className='content-center px-7'>
           

          <input
                type="text"
                name="card-expiration-date"
                id="card-expiration-date"
                className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="DD / MM / YYYY"
                />
              <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {filters.map((filters, filtersdx) => (
          <div key={filtersdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label htmlFor={`person-${filters.id}`} className="select-none font-medium text-gray-900">
                {filters.name}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`person-${filters.id}`}
                name={`person-${filters.id}`}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>

          </div>
        </Disclosure.Panel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sortierung
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
            
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}
