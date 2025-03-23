import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./store";


export default function User() {
    let users = useSelector((state) => state.user.users);
    let status = useSelector((state) => state.user.status);
    let error = useSelector((state) => state.user.error);
    console.log(users);




    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <><div className="container"><h2 className="text-primary text-center m-5">User</h2>
            {status == "loading" && <h2>Getting data please wait</h2>}
            {status == "complete" && error == false && (<table className="table table-bordered w-75"><thead><tr><th>Id</th>
                <th>Name</th>
                <th>email</th>
                <th>Phone number</th></tr></thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            < td >{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td></tr>))}
                </tbody>

            </table>)}
            {error && <h2 className="text-danger">{error}</h2>}
        </div ></>
    );
}
