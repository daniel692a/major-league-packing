import Flight from './Flight'

export default function Itinerary({props}) {
    return(
        <section>
            <Flight
                departureTime="o6:50"
                arrivalTime="9:20"
                date="Jul 2"
                origin="LHR"
                destination="OSL"
            />
        </section>
    )
}