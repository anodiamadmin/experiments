import {Name} from './ListPersons.types'

type PersonListProps =
{
  names:Name[]
}
export const ListOfPersons=(props:PersonListProps) =>{
  return (
    <div>
        <h2>Prop Types and Tips :</h2>
        {props.names.map(name=>{
            return(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            )
        })}
    </div>
  )
}