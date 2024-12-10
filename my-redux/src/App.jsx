
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Slice/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div className='w-[500px] h-[200px] bg-purple-300 m-auto pt-[80px] shadow-sm rounded-[10px]'>
        <div>
          <button
            className='bg-green-400 font-serif font-bold text-[20px] py-[7px] px-[10px] mr-[10px] rounded-[10px]'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            disabled={count == 0}
            className='bg-blue-400 font-serif font-bold text-[20px] py-[7px] px-[10px] ml-[10px] rounded-[10px]'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App
