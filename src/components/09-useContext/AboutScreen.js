import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const { user, setUser } = useContext(UserContext);

    const handleClickLogout = () => {
        setUser({});
    }
    return (
        <div>
            <h1>AbautScreen</h1>
            <hr />
            <button className="btn btn-danger" onClick={handleClickLogout}>LogoUT</button>
        </div>
    )
}
