import './Loader.scss'

interface LoaderProps {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    return (
        <div>
            <span className="loader"></span>
        </div>
    )
}
