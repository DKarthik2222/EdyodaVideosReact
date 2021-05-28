import React from 'react'
import { useHistory } from "react-router";

function Redirect() {
    const id = window.location.search;
    const res = id.split("?")[1];
    const location = useHistory();
    location.push(`/watch?${res}`);
    return (
        <div>
            
        </div>
    )
}

export default Redirect
