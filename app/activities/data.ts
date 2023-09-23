import { Event } from '@/types/event';


const getImageUrl = async (query: string) => {
    const url = `https://pixabay.com/api/?key=39616664-766977663574b848a138b03bd&q=${query}`
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
    const firstHit = data.hits[0]
    return firstHit.previewURL
}

export const eventFactory = async (sport: string): Promise<Event> => {
    let imageUrl = ""
    try {
        console.log("search image url")
        imageUrl = await getImageUrl(sport)
    } catch (e) {
        console.log(e)
    }
    console.log(imageUrl)
    return {
        id: 9999,
        name: sport,
        description: `Meine Freundin Bibi und ich suchen noch 3 Leute um zusammen ${sport} zu spielen!`,
        imageUrl: imageUrl,
        tags: [],
    }
}

export const Data: Event[] = [
    {id: 0, name: "Ökullus-Lauf 2023", description: "Landschaft und Spezialitäten in Kombination mit Bewegung genießen.", imageUrl: "https://wasser-freizeit.de/images/genuss-lauf/OL19%20540%202.jpg", tags: ["Laufen", "Outdoor", "Event"]},
    {id: 1, name: "Factory Cup #1", description: "40 spannende Boulder von brillianten RoutesetterInnen in verschiedenen Schwierigkeitsstufen warten auf euch 🎉", imageUrl: "https://www.boulderfactory.de/sites/default/files/media/image/fullsizeoutput_4b1-2.png", tags: ["Indoor", "Event"]}
];
