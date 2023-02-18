import s from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    return (
        <div className={ s.loader }>
        </div>
    )
}
