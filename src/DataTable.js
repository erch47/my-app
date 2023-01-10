import React, {useState} from 'react';

const DataTable = () => {
    const studentInfo = [
        {
            id: 1,
            firstName: "Erik",
            lastName: "Svensson",
            age: 20,
            country: "Sweden",
            city: "Uppsala"
        },
        {
            id: 2,
            firstName: "John",
            lastName: "Johnson",
            age: 20,
            country: "USA",
            city: "Texas"
        },
        {
            id: 3,
            firstName: "Anders",
            lastName: "Andersson",
            age: 34,
            country: "Sweden",
            city: "Göteborg"
        },
        {
            id: 4,
            firstName: "Carl",
            lastName: "Carlsson",
            age: 19,
            country: "Sweden",
            city: "Stockholm"
        },
    ]


    const [studentList, setStudentList] = useState(studentInfo);
    const [student, setStudent] = useState({id: 0, firstName: '', lastName: '', age: 0, birthdate: '', country: '', city: ''});
    const [showDetails, setShowDetails] = useState(false);

    const TableHeader = () => {
        return(
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        );
    }

    const TableAction = (props) => {
        const btnAction = () =>{
            setStudent(props.studentInfo)
            setShowDetails(true)
        }
        return (<button type="button" class="btn btn-primary" onClick={btnAction}>Details</button>)
    }

    const TableRow = (props) => {
        const tableList = props.studentInfo;
        const row = tableList.map((student) => {
            return(
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>
                    <td><TableAction studentInfo={student}/></td>
                </tr>
            );
        })
        return <tbody>{row}</tbody>
    }

    const ShowStudentDetails = (props) => {
        return(
            <div>
                <h3>Student information</h3>
                <p><b>{student.city}, {student.country}</b></p>
                <p>Name: {student.firstName} {student.lastName}</p>
                <p>Age: {student.age}</p>
                <button type="button" class="btn btn-outline-info mb-1" onClick={() => {setStudent({}); setShowDetails(false)}}>Hide</button>
            </div>
        );
    }

    return(
        <div class="container border">
            <h2>Student List</h2>
            <table class="table">
                <TableHeader />
                <TableRow studentInfo = {studentList} />
            </table>
            <ShowStudentDetails student={student}/>
        </div>
    )

}
export default DataTable