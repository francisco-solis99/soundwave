const permission = (...allowedRoles) => {
    return (req, res, next) => {
        const { user } = req;
        //check here user type

        console.log(allowedRoles, user.typeUserId)
        if (user && allowedRoles.includes(user.typeUserId)) {
            return next(); // if type permission is allowed, so continue the request using the next middleware
        }
        return res.status(403).json({ message: 'Forbidden' }); //{ message: 'Forbidden' }
    };
}

module.exports = permission;