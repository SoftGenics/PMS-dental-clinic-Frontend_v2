import React, {Components} from "react";
import { Link } from "react-router-dom";
export default class Logout extends Components {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render(){
        return (
            <>
            <h1>You have been logout</h1>
            <Link to='/'>Login Again</Link>
            </>
        )
    }
}