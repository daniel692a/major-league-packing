export default function InformationContainer({icon, upperDescription, lowerDescription}) {
    return (
        <section>
            <section>
                <p>{icon}</p>
                <p>{upperDescription}</p>
                <p>{lowerDescription}</p>
            </section>
        </section>
    )
}
