"use client";
import BurgerIcons from '@/components/BurgerIcon';
import SearchMenu from '@/components/ActivitySearchComponents/SearchMenu';
import EventCard from "@/components/EventCard";
import { Event } from '@/types/event';
import {Data, eventFactory} from "@/app/activities/data";
import { useState } from 'react';



export default function Page() {
    const [events, setEvents] = useState<Event[]>(Data);
    
    const handleSearch = async (query: string) => {
        const event = await eventFactory(query)
        setEvents([event])
    }
    return (
        
        <main >
            <div className="pt-6">
             <SearchMenu handleSearch={handleSearch}></SearchMenu>

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {events.map((event) => (
                        <EventCard key={event.name} {...event}/>))}
                </ul>
            </div>
            </main >
        
    )
}