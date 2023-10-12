import {useState} from 'react';
import './style.css';

function C1()
{
    const [age,setAge] = useState("You are ? years old");
    const [inputDate,setInputDate] = useState('');

    const f1 = () => {
        const dob = new Date(inputDate);
        const date = new Date();

        const yearDiff = date.getFullYear() - dob.getFullYear();
        const monthDiff = date.getMonth() - dob.getMonth();
        const dateDiff = date.getDate() - dob.getDate();

        if (yearDiff<0)
        {
            setAge("Please enter a proper date");
        }else if(monthDiff>0 || (monthDiff === 0 && dateDiff>=0))
        {
            setAge("You are " + yearDiff + " years old");
        }else if(monthDiff<0 && yearDiff!=0)
        {
            setAge("You are " + (yearDiff-1) + " years old");
        }else
        {
            setAge("Please enter a proper date");
        }
    };
    
    return(
        <div>
            <h4>Enter your date of birth</h4>
            <input type="date" onChange={(input) => setInputDate(input.target.value)}/>
            <br/>
            <button onClick={f1}>Calculate Age</button>
            <h2>{age}</h2>
        </div>
    );
}
export default C1;
