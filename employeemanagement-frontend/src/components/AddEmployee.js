import React, { useState, useEffect } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom'

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()
    // console.log("id: ", id)

    useEffect(() => {
        if(id){
            EmployeeService.getEmployeeById(id)
            .then(res=>{
                // console.log("AddEmployee: ", res)
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
            })
            .catch(e => {console.log(e);})
        }
    }, []);

    const employeeData = {firstName, lastName, email}

    function saveEmployee(e) {
        e.preventDefault();

        if(id){
             EmployeeService.updateEmployee(id,employeeData)
            .then(navigate('/employee'))
            .catch(e => console.log(e))
        }else{
            EmployeeService.saveEmployee(employeeData)
            .then(navigate('/employee'))
            .catch(e => console.log(e))
        }      
    }
    
    return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{id ? 'Update Employee': 'Add Employee'}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={firstName}
                                onChange={e=> setFirstName(e.target.value)} 
                                type="text" placeholder='Enter First Name' required/>
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={lastName} 
                                onChange={e=> setLastName(e.target.value)} 
                                type="text" placeholder='Enter Last Name' required/>
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control'
                                value={email}
                                onChange={e=> setEmail(e.target.value)}  
                                type="email" placeholder='Enter Email' required />
                            </div>
                            <button onClick={e => saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to="/employee" className='btn btn-danger' href="/">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee;