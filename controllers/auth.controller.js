function getSignUp (req, res) {
    res.render('customer/auth/signup')
}

function signUp(req, res) {

}

function getLogin(req, res) {

}

module.exports = {
    getSignUp: getSignUp,
    signUp: signUp,
    getLogin: getLogin,
}