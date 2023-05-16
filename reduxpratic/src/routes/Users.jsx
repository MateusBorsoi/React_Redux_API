import styles from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get_usuarios } from '../Redux/user/actions'
import { selectGetUsers } from '../Redux/user/selectors'
import { Chip, LinearProgress } from '@mui/material'



function Users() {

    const users = useSelector(selectGetUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_usuarios())
    }, [dispatch])



    return (
        <div className={styles.container_users}>
            <div className={styles.users_header}>
                <h1>Usuários</h1>
            </div>
            {!users ? <LinearProgress /> :
                users.length === 0 ? <p className={styles.no_users}>Não existem usuários cadastrados</p> :
                    users.map((user) => (

                        <div className={styles.div_users} key={user.id}>
                            <p> Nome: <Chip label={user.nome} variant="outlined" /></p>
                            <p>Email: <Chip label={user.email} variant="outlined" /></p>
                        </div>
                    ))}
        </div>

    )

}

export default Users