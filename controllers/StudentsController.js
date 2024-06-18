const { Students } = require('../models')
require('dotenv').config()

module.exports = class StudentsController {
    static async showAll(req, res) {
        try {
            const students = await Students.findAll()
            res.status(200).json({ 
                data: students 
            })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async show(req, res) {
        try {
            const students = await Students.findByPk(req.params.id)
            res.status(200).send(students)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async create(req, res) {
        try {
            const students = await Students.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                courseId: req.body.courseId
            })
            res.status(201).send("Estudante Criado com Sucesso !!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async update(req, res) {
        try {
            const students = await Students.findByPk(req.params.id)
            const result = await Students.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                courseId: req.body.courseId
            })
            res.status(200).send("Estudante Atualizado com Sucesso !!")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
    static async delete(req, res) {
        try {
            const students = await Students.findByPk(req.params.id)
            await Students.destroy()
            res.status(200).send("Excluído com Sucesso.")
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
};
