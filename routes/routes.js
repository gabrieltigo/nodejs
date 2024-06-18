const express = require('express')
const router = express.Router()

const path = require('path')

const UsersController = require('../controllers/UsersController')
router.get('/users',UsersController.showAll)
router.get('/users/:id',UsersController.show)
router.post('/users',UsersController.create)
router.put('/users/:id',UsersController.update)
router.delete('/users/:id',UsersController.delete)

// Rotas da model students
const StudentsController = require('../controllers/StudentsController')
router.get('/students', StudentsController.showAll)
router.get('/students/:id', StudentsController.show)
router.post('/students', StudentsController.create)
router.put('/students/:id', StudentsController.update)
router.delete('/students/:id', StudentsController.delete)

// Rotas da model courses
const CoursesController = require('../controllers/CoursesController')
router.get('/courses', CoursesController.showAll)
router.get('/courses/:id', CoursesController.show)
router.post('/courses', CoursesController.create)
router.put('/courses/:id', CoursesController.update)
router.delete('/courses/:id', CoursesController.delete)

router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router