import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByValue, increment } from './redux/features/couterSlice'

const App = () => {
  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)

    const [num,setNum] = useState();
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={()=>{
          dispatch(increment())
      }}>Increment
      </button>
      
      <button onClick={()=>{
        dispatch(decrement())
      }}>
        Decrement
        </button>
        <div>
          <input type="number"  placeholder='Write the value?' onChange={(e)=>setNum(e.target.value)} />
        </div>
        <button
          onClick={()=>{
            dispatch(incByValue(Number(num)))
          }}
        >
          Inc by value
        </button>
    </div>
  )
}

export default App
