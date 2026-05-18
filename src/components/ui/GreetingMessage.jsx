import { useContext } from "react";
import { NameContext } from "../../context/NameContext.jsx";

function GreetingMessage(){

  const { name } = useContext(NameContext);

  return(

    <div style={{
      backgroundColor:"black",
      color:"white",
      padding:"12px"
    }}>

      Hey I am a Greeting message and my name is {name}

    </div>

  )

}

export default GreetingMessage;