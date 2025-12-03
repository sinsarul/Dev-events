import Link from "next/link";
import Image from "next/image";

interface props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}


const EventCard = ({title, image, slug, location, date, time}: props) => {
    return (
        <Link href={`/events`} id="event-card">
            <Image src={image} alt={title} width={410} height={300} className={"poster"}/>
            <p className="title"></p>
        </Link>
    )
}

export default EventCard;