import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Code.module.scss'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button } from 'shared/ui'
import CopyIcon from 'shared/assets/icons/copy-regular.svg'
import { ButtonVariant } from 'shared/ui/Button/Button'

interface CodeProps {
    className?: string
    code: string
}

export const Code: FC<CodeProps> = (props) => {
    const {
        className,
        code
    } = props

    const onCopy = () => {
        try {
            void navigator.clipboard.writeText(code)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <pre className={ classNames(s.Code, {}, [className]) }>
            <Button
                onClick={ onCopy }
                className={ s.copyBtn }
                variant={ ButtonVariant.NO_HOVER }
            >
                <Icon
                    className={ s.copyIcon }
                    Svg={ CopyIcon }/>
            </Button>
            <code className={ s.code }>
                {code}
            </code>
        </pre>
    )
}
