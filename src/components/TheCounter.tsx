import { useCounter } from 'usehooks-ts'

function TheCounter({ initial }: { initial: number }) {
  const { count, increment: inc, decrement: dec } = useCounter(initial ?? 0)

  return (
    <div>
    { count }
    <button className="inc" onClick={() => inc()}>
      +
    </button>
    <button className="dec" onClick={() => dec()}>
      -
    </button>
  </div>
  )
}
export default TheCounter
