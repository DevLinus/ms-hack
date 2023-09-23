import BurgerIcons from '@/components/BurgerIcon';
import SearchMenu from '@/components/ActivitySearchComponents/SearchMenu';
import EventCard from "@/components/EventCard";
import { Event } from '@/types/event';
import {Data} from "@/app/activities/data";



export default function  Page() {
    
    return (
        
        <main >
            <div className="pt-6">
             <SearchMenu></SearchMenu>

                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Data.map((event) => (
                        <EventCard key={event.name} name={event.name} description={event.description} imageUrl={event.imageUrl}/>))}
                </ul>
            </div>
            </main >
        
    )
}