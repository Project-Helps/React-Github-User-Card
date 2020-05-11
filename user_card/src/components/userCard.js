import React from "react";
import Card from "./Card";

const UserCard = (props) => {
  console.log(props);
  const { userData, followers } = props;


  return (
    <div>
      <h3>{userData.login}</h3>
      <img src={userData.avatar_url} />

      {followers.map(follower => <Card follower={follower.follower} expand={follower.expand} userData={props.userData} handleExpand={props.handleExpand} />)}
    </div>
  )

}

export default UserCard;
