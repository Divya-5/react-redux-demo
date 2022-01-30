import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

const UserContainer = ({fetchUsers,userData }) => {
    useEffect(() => {
        fetchUsers();
    }, [])
    return userData.loading ? <h2>Loading...</h2>: userData.error ? <h2>{userData.error}</h2> : (
        <div>
            <h2> Users List</h2>
           <div>{userData && userData.users.map(user => <p key={user.id}>{user.name}</p>)}</div>
        </div>
    )
}
//subscribe
const mapStateToProps = state =>{//redux state
    return {
    userData:state.user
    }
}
const  mapDispatchToProps = dispatch =>{
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
