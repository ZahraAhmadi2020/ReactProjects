import React, { useState } from 'react'
import Box5 from './Box5'
import Box from './Box'
const Part5 = (props) => {
  const [squares, setSquares] = useState(Box5)


  function toggle(id) {
    console.log(id);

    setSquares(prevSquares => {
      //   const newSquares = []
      //   for (let i = 0; i < prevSquares.length; i++){
      //     const currentSquare = prevSquares[i]
      //     if (currentSquare.id === id) {
      //      const updateSquare={ ...currentSquare,
      //        on: !currentSquare.on
      //      }
      //       newSquares.push(updateSquare)
      //     } else {
      //       newSquares.push(currentSquare)
      //     }
      //   }
      //   return newSquares
      // })

      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square

      })
    })
  }
    const squareElement = squares.map(square => (
      <Box key={square.id} id={square.id} on={square.on} toggle={()=> toggle(square.id)} />
    ))


    return (
      <div className='part5'>
        {squareElement}

        click↗️
      </div>
  )
}

export default Part5
