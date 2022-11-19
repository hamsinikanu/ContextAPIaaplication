import react , {useState , createContext} from 'react';
import ComponentB from './ComponentB.js'
 
 //const number = 10;
  export const NumberContext = createContext('');
const ComponentA = () =>{
    const [number,setNumber] = useState(10);
    return(
        <div>
            <h1>ComponentA</h1>
           
            <NumberContext.Provider value = {number}>
              <ComponentB  />
            </NumberContext.Provider>
            <button onClick= {()=> {
                setNumber(20)
            }}> Change Number</button>
          

        </div>
    )
}
export default ComponentA;