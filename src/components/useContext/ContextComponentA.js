import React, {useContext} from "react"
import { UserContext,ChannelContext } from "../../App"
import ContextComponentB from "./ContextComponentB"

const ContextComponentA = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
     <div>
        Component A user {user} channel {channel}
        <ContextComponentB/>
     </div>
    )
}
export default ContextComponentA