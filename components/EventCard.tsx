
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/20/solid";

import React, { useState } from "react";
import Heart from "react-animated-heart"
import HeartVote from "@/components/HeartVote";

interface EventProps {
    name: string
    description: string
    imageUrl: string
}

const getImageUrl = async (query: string) => {
    const url = `https://pixabay.com/api/?key=39616664-766977663574b848a138b03bd&q=${query}`
    const resp = await fetch(url)
    const data = await resp.json()
    const firstHit = data.hits[0]
    return firstHit.previewUrl
}

const eventFactory = async (sport: string) => {
    let imageUrl = ""
    try{
    const imageUrl = await getImageUrl(sport)
    } catch (e) {

        console.log(e)
    }

    return {
        name: sport,
        description: `Meine Freundin Bibi und ich suchen noch 3 Leute um zusammen ${sport} zu spielen!`,
        imageUrl: imageUrl,
    }
}

const EventCard: React.FC<EventProps> = async (event: EventProps) => {



    return (
        <li
            key={event.name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
            <div className="flex flex-1 flex-col p-8">
                <img className="" src={event.imageUrl} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{event.name}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{event.description}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {event.name}
                </span>
                    </dd>
                </dl>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                        <a

                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                            <HeartVote />
                        </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                        <a

                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >

                            Mehr Infos
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventCard;