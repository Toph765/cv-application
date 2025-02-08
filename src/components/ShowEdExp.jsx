import { format } from "date-fns";

function ShowEdExp({ data }) {
    return (
        <>
            <div>
                {data && (data.map(item => {
                    return (
                        <div key={item.id}>
                            <div className="block-title">
                                <h4>{item.schoolName}</h4>
                                <i>{format(item.from, 'MMM yyyy')} - {format(item.to, 'MMM yyyy')}</i>
                            </div>
                            <div>
                                {item.program}
                            </div>
                            <div>
                                <ul>
                                    {item.achievements && (item.achievements.map(note => {
                                        return (<li key={note.id}>{note.text}</li>)
                                    }))}
                                </ul>
                            </div>
                        </div>
                   )}))} 
            </div>
        </>
    )
}

export default ShowEdExp;