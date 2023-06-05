import { type DropdownDirectionType } from 'shared/types/ui'
import s from './popup.module.scss'

export const mapDirectionClass: Record<DropdownDirectionType, string> = {
    'top left': s.topLeft,
    'top right': s.topRight,
    'bottom right': s.bottomRight,
    'bottom left': s.bottomLeft
}
