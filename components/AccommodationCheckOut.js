import InformationContainer from './InformationContainer'
export default function AccommodationCheckOut({checkInTime , name, startDate, address}) {
    return (
        <section>
            <InformationContainer
                icon='🏩'
                upperDescription={`${startDate} ${checkInTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </section>
    )
}
