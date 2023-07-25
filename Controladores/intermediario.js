const database = require('../Infra/database')
const { procurarEmail} = require('../Data/askData')

const validarEmail = async (req, res, next) => {
    const {email} = req.body
    const arroba = email.indexOf('@')

    if(arroba < 0){
        return res.json({message: 'Email invalido'})
    }

    const achou = await procurarEmail(email)
    if(achou.length > 0){
        return res.json({message: 'Email já existe'})
    }
    next()
}


const validarToken = async (req, res, next) => {
    const {Authorization} = req.headers

    console.log(Authorization )
    next()
}


module.exports = {
    validarEmail,
    validarToken
}