import React from 'react'
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai'

function Homepage() {
    let [users, setUser] = useState([])
    const addUser = (data) => {
        data.no = users.length + 1
        data.lastseen = "few hours ago"
        setUser([...users, data])
        console.log(users);
        console.log(users.splice(1));
        console.log(data);
    }
    const deleteuser = (item) => {
        let idxofproduct = users.findIndex(user => item.email == user.email)
        users.splice(idxofproduct, 1);
        setUser(...users)
        console.log(users);

    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        addUser(data)
        reset()
    };
    return (
        <div><div className="main">
            <div className='addUser-button'>
                <button type="button" className="modalButton" data-toggle="modal" data-target="#exampleModalCenter">
                    Add User
                </button>

            </div>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th className='thead-name' scope="col">Name</th>
                            <th className='thead-lastseen' scope="col">Last Signed In</th>
                            <th className='thead-role' scope="col">Role</th>
                            <th className='thead-delete'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((item) => (
                                <tr>
                                    <th scope="row">{item.no}</th>
                                    <td>{item.email}</td>
                                    <td>{item.lastseen}</td>
                                    <td>{item.role}</td>
                                    <td onClick={() => deleteuser(item)}><AiOutlineDelete className='deleteicon' /></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modalholder">
                            <div className="modalleft">
                                <AiOutlineUserAdd className='addusericon' />
                                <div className='modalleft-text'><p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit earum blanditiis fuga sapiente officiis, cum officia in eligendi velit distinctio quo consequuntur aliquam quaerat culpa!
                                </p></div>
                            </div>
                            <div className="modalright">
                                <div>
                                    <h4>User Information</h4>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label style={{ "margin-bottom": "10px" }} >Email Id or User</label>
                                            <input type="text" name="email" {...register("email", { required: true })} className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div>
                                            <label style={{ "display": "block", "margin-bottom": "10px" }}>Role</label>
                                            <select className='dropdownner' id="role" name="role"
                                                {...register("role", { required: true })}>
                                                <option value="Admin">Select One</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Manager">Manager</option>
                                                <option value="Staff">Staff</option>
                                            </select>
                                        </div>
                                        <div className='button-container'>

                                            <button type="button" className=" buttonclose" data-dismiss="modal">Close</button>
                                            <button type="submit" onClick={() => { { handleSubmit(onSubmit) } }} className="buttonsubmit"  >Save </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Homepage