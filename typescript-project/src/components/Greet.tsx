type GreetProps ={
    name: string
    messageCount?: number   // ? implies optional parameter
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props    // detting default value to optional parameter
  return (
    <div>
      <h2>
        Welcome
        {props.isLoggedIn?
            ` ${props.name}. You have ${messageCount} new messages`:
            ` guest`
        }
        !
        </h2>
    </div>
  )
}

export default Greet
