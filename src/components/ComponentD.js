import {NumberContext} from './CompnentA'
import React, {useContext} from 'react'

class ComponentD extends React.Component {
   
    // constructor(props){
    //     super(props)
    // }
    render(){
        return ( 
            <h1>D Component</h1>
        )
            
        }
    }


// const ComponentD = (props) =>{
//     const number = useContext(NumberContext)
//     return (
//         <div>
//             <h1>ComponentD</h1>
//             <p>{number}</p>
            
//         </div>
//     )
// }
export default ComponentD;