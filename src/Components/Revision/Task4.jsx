

let students = [
	{ name: 'student1', Maths: 30, Science: 50 },
	{ name: 'student2', Maths: 80, Science: 90 },
	{ name: 'student3', Maths: 10, Science: 20 },
	{ name: 'student4', Maths: 50, Science: 50 },
];

export const Task4 = () => {

    return(

        <>
            <div className="todo">
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Result</th>                          
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((el,index)=>(

                            ( el.Maths >=50 ) && (el.Science >=50 ) ? 

                            <tr>
                                <td>{index+1}</td>
                                <td>{el.name}</td>
                                <td>{"Paas"}</td>
                            </tr>

                            :
                            
                            <tr>
                                <td>{index+1}</td>
                                <td>{el.name}</td>
                                <td>{"Fail"}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}