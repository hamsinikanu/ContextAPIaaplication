import react from 'react'
import ComponentD from './ComponentD.js'
const ComponentC = (props) => {
    return (
        <div>
            <h1>ComponentC</h1>
            
            <ComponentD />
        </div>
    )
}
export default ComponentC;