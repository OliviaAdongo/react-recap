import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const  onClick = () => {
        console.log("CLICKED")
        alert("CLICKED ADDDDDDDDDDDD")
    }
  return (
    <div>
        <header  className="header">
        <h1>Olivia</h1>
        <h2>{title}</h2>

        <Button color='green' text="Add"  onClick= {onClick}/>

        {/* <Button color='blue' text="Hi 2"/>
        <Button color='red' text="Hi 3"/>
        <Button color='yellow' text="Hi 4"/> */}
        
        </header>
    </div>
  )
}

// Header.defaultProps = {
//     title: "Favourite Cats"
// }
Header.propTypes = {
    title: PropTypes.string,
    // defines the datatype  of the prop it  will give an output but it will give you a warning
}
export default Header