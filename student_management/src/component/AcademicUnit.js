import React, {useState} from 'react'
import Button from './Button'
import axios from 'axios';

function AcademicUnit() {

    const[academicCode, setAcademicCode] = useState('');
    const[academicName, setAcademicName] = useState('');
    const[academicType, setAcademicType] = useState('');

    const saveProgram = () => {
        //alert('Academic Unit Saved!');

        alert(`Saving Academic Unit with Code: ${academicCode}, Name: ${academicName}, Type: ${academicType}`);

        axios.post("http://localhost:8001/api/academicUnit/save",
            {
            code: academicCode,
            name: academicName,
            type: academicType
         }).then((response) => {
            alert(response.data);
         }).catch((err) => {
            console.log("Error: " + err);
         });
    }



  return (
    <div>
        <h1>Academic Unit Page</h1>
        <div style={{marginRight: '10px', marginBottom: '10px'}}>
            <label> Program Code:</label>
            <input type="text" value={academicCode} onChange={(e) => setAcademicCode(e.target.value)} placeholder='Enter Program code' />
        </div>
        <div style={{marginRight: '10px', marginBottom: '10px'}}>
            <label> Program Name:</label>
            <input type="text" value={academicName} onChange={(e) => setAcademicName(e.target.value)}    placeholder='Enter Program Name' />
        </div>
        <div style={{marginRight: '10px', marginBottom: '10px'}}>
            <label> Academic Unit Type:</label>
            <select value={academicType} onChange={(e) => setAcademicType(e.target.value)}>
                <option>SELECT TYPE</option>
                <option>PROGRAMME</option>
                <option>FACULTY</option>
                <option>DEPARTMENT</option>
            </select>
        </div>
        <div>
            <Button label="SAVE PROGRAM" clickMe={saveProgram} styleMe={{color: 'white', backgroundColor: 'green'}}/>
        </div>
    </div>
  )
}

export default AcademicUnit