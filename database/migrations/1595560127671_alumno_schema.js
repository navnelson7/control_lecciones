'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnoSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.string('codigo')
      table.string('nombres',50)
      table.string('apellidos',50)
      table.integer('edad',2)
      table.boolean('sexo')
      table.date('fecha_nacimiento')
      table.string('direccion',250)
      table.string('telefono',8)
      table.string('padre',200)
      table.string('madre',200)
      table.string('encargado',200)
      table.string('parentesco',50)
      table.boolean('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnoSchema
