const { Courses } = require('../models')
require('dotenv').config()

module.exports = class CoursesController {
    static async showAll(req, res) {
        try {
            const courses = await Courses.findAll()
            res.status(200).json({ 
                data: courses 
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async show(req, res) {
        try {
            const courses = await Courses.findByPk(req.params.id)
            res.status(200).send(courses)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async create(req, res) {
        try {
            const courses = await Courses.create({
                name: req.body.name,
                description: req.body.description
            })
            res.status(201).send("Curso Criado com Sucesso !!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async update(req, res) {
        try {
            const courses = await Courses.findByPk(req.params.id)
            const result = await Courses.create({
                name: req.body.name,
                description: req.body.description
            })
            res.status(200).send("Curso Atualizado com Sucesso !!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async delete(req, res) {
        try {
            const courses = await Courses.findByPk(req.params.id)
            await Courses.destroy()
            res.status(200).send("Excluído com Sucesso.")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
}
