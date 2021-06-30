import Flight from './Flight';
import AccommodationCheckin from './AccommodationCheckin';
import AccommodationCheckOut from './AccommodationCheckOut';
import Restaurant from './Restaurant';

export default function Itinerary({itinerary}) {
    return(
        <>
            <section className='itinerary'>
                <h2>Flights</h2>
                {itinerary.flights.map(flight => (
                    <Flight
                        departureTime={flight.departureTime}
                        arrivalTime={flight.arrivalTime}
                        date={flight.date}
                        origin={flight.origin}
                        destination={flight.destination}
                        key={flight.confirmation}
                    />
                ))}

                <h2>Accommodation</h2>
                {itinerary.accommodation.map(place => (
                    <AccommodationCheckin
                        startDate={place.startDate}
                        checkInTime={place.checkInTime}
                        name={place.name}
                        address={place.address}
                    />
                ))}

                {itinerary.accommodation.map(place => (
                    <AccommodationCheckOut
                        endDate={place.endDate}
                        checkOutTime={place.checkOutTime}
                        name={place.name}
                        address={place.address}
                    />
                ))}

                <h2>Dining</h2>
                {itinerary.restaurants.map(restaurant => (
                    <Restaurant
                        time={restaurant.time}
                        date={restaurant.date}
                        name={restaurant.name}
                        address={restaurant.address}
                    />
                ))}

            </section>
            <style jsx>{`
                .itinerary {
                    display: flex;
                    flex-direction: column;
                    grid-gap: 18px;
                    padding: 18px 0;
                    width: 50%;
                }
            `}</style>
        </>
    )
}