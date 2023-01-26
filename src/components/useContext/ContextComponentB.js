import React, {useContext} from "react"
import { UserContext,ChannelContext } from "../../App"

const ContextComponentB = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
     <div>
        Component B user {user} channel {channel}
       
     </div>
    )
}
export default ContextComponentB