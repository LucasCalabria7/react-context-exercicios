import { useState, useEffect } from "react"
import axios from 'axios'
import {Card} from '../components/Card'

export function HomePage() {

    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "lucas-calabria"
            }
        })
            .then((resp) => {
                setUsers(resp.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <>
            {users.map((user) => {
                return <Card 
                key={user.id} 
                user={user}
                />
            })}
        </>
    )
}