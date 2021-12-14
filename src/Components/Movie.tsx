export default function Movie(props:{title:string,releaseData:string})
{
    return <li>
        This movie {props.title}  was released on {props.releaseData}     
    </li>
}