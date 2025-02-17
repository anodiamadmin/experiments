type ListProps<T>={
    items:T[]
    onClick:(value:T)=>void
}

export const GenericList = <T extends {}>({items,onClick}:ListProps<T>) => {
  return (
    <div>
        <h2>List of Items(Generics)</h2>
        {
            items.map((item,index) =>{
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {typeof item === 'string' || typeof item === 'number' 
                            ? item 
                            : Array.isArray(item) 
                            ? item.join(', ') // Convert list to a comma-separated string
                            : '[Object]'}
                    </div>
                )
            })
        }
    </div>
  )
}