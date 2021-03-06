export default function InformationContainer({icon, upperDescription, lowerDescription}) {
    return (
        <>
            <section className='information-container'>
                <span className="icon">{icon}</span>
                <span className="upper">{upperDescription}</span>
                <span className="lower">{lowerDescription}</span>
            </section>
            <style jsx>{`
                .information-container {
                    display: grid;
                    grid-template-areas: "icon upper" "icon lower";
                    grid-gap: 7px;
                    background: #f2f8fb;
                    border-radius: 8px;
                    padding: 1rem;
                    grid-template-columns: 40px auto;
                }
                .icon {
                    grid-area: icon;
                    display: flex;
                    align-items: center;
                    justifyContent: center;
                }
                .upper {
                    grid-area: upper;
                }
                .lower {
                    grid-area: lower;
                }
            `}</style>
        </>
    )
}
