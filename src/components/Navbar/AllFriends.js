import React from "react";
import Friends from "./Friends";

const AllFriends = (props) => {
    let friends = props.names.map(friend => < Friends name={friend.name} id={friend.id}/>)

    return (
        <div>
            {friends}
        </div>

    )
}
export default AllFriends;