'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.Integer
      },
      name: { allowNull: false, type: Sequelize.String },

      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.String
      },

      avatar: {
        allowNull: false,
        type: Sequelize.String
      },

      password_hash: {
        allowNull: false,
        type: Sequelize.String
      },

      provider: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.Boolean
      },

      created_at: {
        allowNull: false,
        type: Sequelize.Date
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.Date
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
