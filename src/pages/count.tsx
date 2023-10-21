import { useState } from 'react'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/features/count/countSlice'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { Button, Input } from 'antd'
import { NextPage } from 'next'

const CountPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <div>
      <h1>Example for redux toolkit</h1>
      <h2>The current number is {count}</h2>
      <div>
        <Input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
          width={20}
        />
        <Button
          type='primary'
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </Button>
      </div>
      <div>
        <Button type='primary' onClick={() => dispatch(decrement())}>
          Decrement by 1
        </Button>
        <Button type='primary' onClick={() => dispatch(increment())}>
          Increment by 1
        </Button>
      </div>
    </div>
  )
}

export default CountPage
