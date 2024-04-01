import React from 'react'

const Error = ({ command }) => {
    return (
       
            <p>
                bash: {command}: command not found <br/>
                type `help' to see the list of commands.
            </p>

      
    )
}

export default Error