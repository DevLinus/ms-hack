"use client"
import {EnvelopeIcon, PhoneIcon} from "@heroicons/react/20/solid";

import React, { useState } from "react";
import Heart from "react-animated-heart"
import { Event } from "@/types/event";
import HeartVote from "./HeartVote";

interface EventProps {
    name: string
    description: string
    imageUrl: string
}

const Tag = ({text}: {text: string}) => {
    return (
        <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {text}
        </span>
    )
}

const EventCard = (event: Event) => {
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
                {event.tags.map((text, i) => <Tag key={i} text={text} />)}
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