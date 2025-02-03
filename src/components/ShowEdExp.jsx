import { format } from "date-fns";

function ShowEdExp({ data }) {
    return (
        <>
            <div>
                {data && (data.map(item => {
                    return (
                        <div key={item.id}>
                            <div>
                                <h4>{item.schoolName}</h4>
                                <i>{format(item.graduation, 'MMM yyyy')}</i>
                            </div>
                            <div>
                                {item.program}
                            </div>
                        </div>
                   )}))} 
            </div>
        </>
    )
}

export default ShowEdExp;