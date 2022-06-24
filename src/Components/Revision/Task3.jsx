import { useState } from "react";


export const Task3 = (
    
) => {

    let students = [
        { name: 'student1', Maths: 30, Science: 50 },
        { name: 'student2', Maths: 80, Science: 90 },
        { name: 'student3', Maths: 10, Science: 20 },
        { name: 'student4', Maths: 50, Science: 50 },
    ];


    return(

        <>

        <div>
            {students.map(({name , Maths , Science} ,index) => {
                if (Maths && Science >=50) {
                    return <h2 key={index}>{name - "Passed"}</h2>;
                }

                    return <h2 key={index}>{name - "Failed"}</h2>;
            })}
        </div>
        
        </>
    )
}