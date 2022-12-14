const permission = (...allowedRoles) => {
    return (req, res, next) => {
        const { user } = req

        //Check User Type 1 - Admin, 2 - Premium
        if (user && allowedRoles.includes(user.typeuserId)) {
            return next() // if type permission is allowed, so continue the request using the next middleware
        }
        return res.status(403).json({ message: 'Forbidden' })
    }
}

module.exports = permission
