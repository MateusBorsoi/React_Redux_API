import jsonServer from 'json-server';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = 'y8oZOaxQb7wNGlOT7YC9IOXaVi3'

const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.defaults()


server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/users', async (req, res) => {
    const { nome, email, senha } = req.body

    const userExist = router.db.get('users').find({ email: email }).value()


    if (userExist) {
        res.status(409).json({ mensagem: "Usuário já cadastrado !" })

    } else {

        const lasUser = router.db.get('users').value().slice(-1)[0]
        const newId = lasUser ? lasUser.id + 1 : 1


        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(senha, salt)

        const user = {
            id: newId,
            nome: nome,
            email: email,
            senha: hash
        }

        router.db.get('users').push(user).write()
        res.json({ user })
    }

})



server.post('/login', async (req, res) => {

    const { email, senha } = req.body
    const findUser = router.db.get('users').find({ email: email }).value()

    if (!findUser) {
        res.status(401).json({ mensagem: "E-mail ou senha inválidos", status: 'fail' })
        return
    }

    const passwordMatch = await bcrypt.compare(senha, findUser.senha)

    if (passwordMatch) {

        res.status(200).json({ mensagem: "Login efetuado com sucesso" })
    } else {
        res.status(401).json({ mensagem: "Email ou senha inválidos" })
    }


})

server.use(router)

server.listen(5000, () => {
    console.log('API Server - Rodando na porta 5000')
})