import InformationContainer from './InformationContainer'
export default function AccommodationCheckOut({checkOutTime , name, endDate, address}) {
    return (
        <>
            <InformationContainer
                icon='🏩'
                upperDescription={`Check out: ${endDate} ${checkOutTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
