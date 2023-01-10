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

    const TableAction = () => {
        return (<button type="button" class="btn btn-primary">Details</button>)
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
                    <td><TableAction/></td>
                </tr>
            );
        })
        return <tbody>{row}</tbody>
    }
    return(
        <div class="container border">
            <h2>Student List</h2>
            <table class="table">
                <TableHeader />
                <TableRow studentInfo = {studentList} />
            </table>
        </div>
    )

}
export default DataTable