import React from 'react'

function StudentList() {
  const studentList = [
    {id: 1, name:"Tom", age: 20},
    {id: 1, name:"alice", age: 18},
    {id: 1, name:"Bob", age: 21}
  ];

  let student = studentList.filter((s) => s.name === "alice");


  return (
    <div>
    {console.log(student)}
      <h2>Student with the name: {student[0].name} has this age {student[0].age}</h2>

      <div>
        {
          studentList.map((student, index) => (
              <div key={index}>
              <p key={index}> Your id is {student.id}, your name is: {student.name}, your age is {student.age}</p>
                <p>
                  {
                    student.age > 18 ? "You are an adult" : "You are a minor"
                  }
                </p>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default StudentList
