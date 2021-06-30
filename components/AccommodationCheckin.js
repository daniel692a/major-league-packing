import InformationContainer from './InformationContainer'
export default function AccommodationCheckin({checkInTime , name, startDate, address}) {
    return (
        <>
            <InformationContainer
                icon='🏩'
                upperDescription={`${startDate} ${checkInTime}`}
                lowerDescription={`${name}, ${address}`}
            />
        </>
    )
}
