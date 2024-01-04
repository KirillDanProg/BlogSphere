import s from './ProfilePage.module.scss'
import { Page } from 'widgets/Page/ui/Page'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const { id = '1' } = useParams()

    if (!id) {
        // todo: add error
        return null
    }

    return (
        <Page className={s.container}>
            <EditableProfileCard id={id} />
        </Page>
    )
}
export default ProfilePage
