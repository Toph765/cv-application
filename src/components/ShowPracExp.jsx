import { format } from "date-fns";

function ShowPracExp({ data }) {
    return (
        <>
            <div>
                {data && data.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                <h4>{item.companyName}</h4>
                                <i>{format(item.from, "MMM yyyy")} - {format(item.to, "MMM yyyy")}</i>
                            </div>
                            <div>
                                {item.position}
                            </div>
                            <div>
                                <ul>
                                    {item.responsibilities && (item.responsibilities.map(resp => {
                                        return (<li key={resp.id}>{resp.task}</li>)
                                    }))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShowPracExp;