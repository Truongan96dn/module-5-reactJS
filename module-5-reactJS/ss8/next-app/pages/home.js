import axios from "axios";


export default function Home({patients}) {
    return (
        <>
            <h1>Vietnam's covid-19 infomation</h1>
            <table>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                </tr>
                </thead>
                <tbody>
                {
                    patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.Date}</td>
                            <td>{patient.Confirmed}</td>
                            <td>{patient.Active}</td>
                            <td>{patient.Recovered}</td>
                            <td>{patient.Deaths}</td>
                        </tr>))
                }
                </tbody>
            </table>
        </>
    )
}
export const getServerSideProps = async () => {
    const response = await axios.get('http://127.0.0.1:8080/patient');
    return {
        props: {
            patients: response.data
        }
    }
}