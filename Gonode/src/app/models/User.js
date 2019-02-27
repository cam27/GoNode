module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    name: Datatypes.String,
    email: Datatypes.String,
    avatar: Datatypes.String,
    password_hash: Datatypes.String,
    provider: Datatypes.boolean
  })

  return User
};
