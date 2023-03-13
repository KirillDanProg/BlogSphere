import { type FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import s from './Avatar.module.scss'
import DefaultUserAvatar from '../../assets/images/defaultUserAvatar.jpg'
import { useSelector } from 'react-redux'
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'

interface AvatarProps {
    className?: string
    size?: number
    alt?: string
    src: string
    circle?: boolean
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        alt,
        size,
        circle
    } = props

    const style = useMemo(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    const profileData = useSelector(getProfileForm)
    const avatar = profileData?.avatar

    return (
        <img
            alt={ alt }
            style={ style }
            src={ avatar ? src : DefaultUserAvatar }
            className={ classNames(s.Avatar, { [s.circle]: circle }, [className]) }
        />
    )
}
