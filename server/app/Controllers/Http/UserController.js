'use strict'

const User = use("App/Models/User")


class UserController {
    async login({ request, auth }) {
        const { email, password } = request.all();
        return await auth.attempt(email, password)
    }

    async create({ request }) {
        const data = request.only(["username", "email", "password"])

        const user = await User.create(data)
    
        return user
    }

    async logout({auth}){
        return await auth.logout();
    }
}

module.exports = UserController
