"use client";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

import { Event } from '@/types/event';
import {Data} from "@/app/activities/data";

const carouselItemClassName = "relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"

const CarouselItem: React.FC<Event> = (sportEvent: Event) => {
    const extra = sportEvent.hidden ? " hidden" : ""
    const className = carouselItemClassName + extra + "pt-12"
    {console.log(extra)}
    return (
        <div
            className={sportEvent.hidden ? "hidden" : ""}
            data-te-carousel-item
            style={{backfaceVisibility: "hidden"}}>
            <EventCard name={sportEvent.name} description={sportEvent.description} imageUrl={sportEvent.imageUrl}/>
        </div>
    )
}

const Carousel = () => {
    const [activeItem, setActiveItem] = useState(0)
    useEffect(() => {
        const init = async () => {
            const { Datepicker, Input, initTE } = await import("tw-elements");
            initTE({ Datepicker, Input });
        };
        init();
    }, []);

    const handlePrev = () => {setActiveItem( activeItem - 1)
    console.log(activeItem);
    }

    const handleNext = () => {
        setActiveItem(activeItem + 1)
        console.log(activeItem);
    }


    return (
        <div
            id="carouselExampleCaptions"
            className="relative pt-12"
            data-te-carousel-init
            data-te-ride="carousel">
            {/* <!--Carousel indicators--> */}
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators>

            </div>
            {/* <!--Carousel items--> */}
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item--> */}
                {Data.map(i => <CarouselItem key={i.id} hidden={i !== Data[activeItem]} id={i.id} imageUrl={i.imageUrl} name={i.name} description={i.description} />)}
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev"
                onClick={handlePrev}>
    <span className="inline-block h-8 w-8">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"

          stroke="currentColor"
          className="h-6 w-6">
        <path

            d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next"
                onClick={handleNext}>
    <span className="inline-block h-8 w-8">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
            </button>
        </div>
    )
}

export default Carousel;