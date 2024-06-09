export const setUser = (user) => {
    return {
        type : "set_user",
        payload : user
    }
}

export const logout_user = () => {
    return {
        type : "logout_user",
    }
}