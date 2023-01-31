import { useCountStore } from '@/store'
import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {
    const [
        count,
        increment,
        decrement,
        incrementAsync,
        incrementIfOdd,
    ] = useCountStore((state) => [
        state.count,
        state.increment,
        state.decrement,
        state.incrementAsync,
        state.incrementIfOdd,
    ])
    const [amount, setAmount] = useState('2')
    const incrementValue = Number(amount) || 0

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => decrement()}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => increment()}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button
                    className={styles.asyncButton}
                    onClick={() => incrementAsync(incrementValue)}
                >
                    {`异步加${amount}`}
                </button>
                <button
                    className={styles.button}
                    onClick={() => incrementIfOdd(1)}
                >
                    基数加1
                </button>
            </div>
        </div >
    )
}

export default Counter
