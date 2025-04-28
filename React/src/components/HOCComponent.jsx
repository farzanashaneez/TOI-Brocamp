import React, { useEffect } from "react";

const HOCComponent = (WrapedComponent) => {
  return (props) => {
    useEffect(()=>{
console.log('props changes',props)
    },[props])
    return <WrapedComponent {...props} />;
  };
};


 const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default HOCComponent(UserProfile)
