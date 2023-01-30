import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CrudDemo = () => {
    const persons = [
        {
            id: 1,
            name: "Erik Svensson",
            email: "es@email.se"
        },
        {
            id: 2,
            name: "John Johnsson",
            email: "jj@email.com"
        },
        {
            id: 3,
            name: "Anders Andersson",
            email: "aa@email.se"
        },
        {
            id: 4, 
            name: "Carl Carlsson",
            email: "cc@email.se"
        }
    
        
    ] 
    
    const [personList, setPersonList] = useState(persons);
    const baseURL = 'https://localhost:3000/api/person';


    useEffect(()=>{
        axios.get(`${baseURL}`).then((response) => {
            setPersonList(response.data);
        });
    }, []);

    const TableHeader = () => {
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
        );
    }

    const TableAction = () => {
        return(
            <div>
                <button type='button' className='btn btn-primary m-1' onClick={PersonDetails}>Details</button>
                <button type='button' className='btn btn-warning m-1'>Edit</button>
                <button type='button' className='btn btn-danger m-1'>Delete</button>
            </div>
        );
    }

    const TableRow = (props) => {
        const tableData = props.persons;
        const row = tableData.map((person) => {
            return(
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td><TableAction/></td>
                </tr>
            );
        });

        return <tbody>{row}</tbody>
        
    }

    const PersonDetails = (props)=> {
        const [person, setPerson] = useState({});
        const {id} = useParams();
        useEffect(() => {
            axios.get(`${baseURL}/${id}`).then((response) => {
                setPerson(response.data);
            });
        }, []);
    }

    return(
        <div class='container'>
            <table class='table'>
                <TableHeader/>
                <TableRow persons = {personList}/>
            </table>
        </div>
    );

}





export default CrudDemo;