import React, {useEffect, useState} from 'react'
import Button from './Button'
import axios from 'axios';

function AcademicUnit() {

    const[academicCode, setAcademicCode] = useState('');
    const[academicName, setAcademicName] = useState('');
    const[academicType, setAcademicType] = useState('');

    const [programs, setPrograms] = useState([]);

    const [parentType, setParentType] = useState('PROGRAMME');

    const [savingProgram, setSavingProgram] = useState(true);

    const [selectedProgram, setSelectedProgram] = useState('');
    

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

    const fetchPrograms = () => {
        axios.get(`http://localhost:8001/api/academicUnit/findByType?type=${parentType}`).then((response) => {
            setPrograms(response.data);
        }).catch((err) => {
            console.log("Error: " + err);
        });
    }

    const saveFaculty = () => {
        axios.post(`http://localhost:8001/api/academicUnit/saveParentOrChild?parentCode=${selectedProgram}`,
            {
            code: academicCode,
            name: academicName,
            type: academicType
         }).then((response) => {
            alert(response.data);
            setAcademicCode('');
            setAcademicName('');
            setAcademicType('');
         }).catch((err) => {
            console.log("Error: " + err);
         });
    }

    useEffect(() => {
        fetchPrograms()
    }, []);

  return (
    <>
    { savingProgram  ? (
    <div>
        <h1>PROGRAM</h1>
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
        <div>
            <button onClick={() => setSavingProgram(false)}>Switch to Save Faculty</button>
        </div>
    </div>
    ) : (
    <div>
        <h1>FACULTY</h1>
        <div style={{marginRight: '10px', marginBottom: '10px'}}>
            <label> Faculty Code:</label>
            <input type="text" value={academicCode} onChange={(e) => setAcademicCode(e.target.value)} placeholder='Enter Program code' />
        </div>
        <div style={{marginRight: '10px', marginBottom: '10px'}}>
            <label> Faculty Name:</label>
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
             <label> programs:</label>
            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}>
                <option>SELECT PROGRAM</option>
                {
                    programs.map((program) => (
                        <option key={program.code} value={program.code}>{program.name}</option>
                    ))
                }
            </select>
        </div>
        <div>
            <Button label="SAVE FACULTY" clickMe={saveFaculty} styleMe={{color: 'white', backgroundColor: 'green'}}/>
        </div>
        <div>
            <button onClick={() => setSavingProgram(true)}>Switch to Save Program</button>
        </div>
    </div>
    )
    }
    </>
  )
}

export default AcademicUnit