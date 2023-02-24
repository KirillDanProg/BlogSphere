import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue'
import { counterActions } from 'entities/Counter/model/slice/counterSlice'
import { useTranslation } from 'react-i18next'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = (props) => {
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    const { t } = useTranslation()
    return (
        <div>
            <h1 data-testid="counter-title">{counterValue}</h1>
            <button data-testid="counter-inc" onClick={ increment }>{t('inc')}</button>
            <button data-testid="counter-dec" onClick={ decrement }>{t('dec')}</button>
        </div>
    )
}
