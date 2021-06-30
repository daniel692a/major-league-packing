import InformationContainer from './InformationContainer'
export default function AccommodationCheckOut({checkOutTime , name, endDate, address}) {
    return (
        <>
            <InformationContainer
                icon='🏩'
                upperDescription={`${endDate} ${checkOutTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
