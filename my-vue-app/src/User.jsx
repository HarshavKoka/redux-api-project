import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./Store";


export default function User() {
    let data = useSelector(
        (state) => state
    );
    console.log(data);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    return (
        <><h1>This is User component</h1></>
    );
}

