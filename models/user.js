// user.js
const db = require('../config/config');
const bcrypt = require('bcryptjs');
const User = {};

User.create = async (user, result) => {
 const hash = await bcrypt.hash(user.password, 10);
  
 const sql = `
    INSERT INTO users(
      email, 
      name,
      lastname,
      phone,
      image,
      password,
      created_at,
      updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
 `;

 db.query(
    sql,
    [
      user.email,
      user.name,
      user.lastname,
      user.phone,
      user.image,
      hash, // Asegúrate de guardar la contraseña hasheada
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        console.log('Error al crear el usuario:', err);
        result(err, null);
      } else {
        console.log('Usuario creado:', res.insertId);
        result(null, res.insertId);
      }
    }
 );
};

User.findByEmail = (email, result) => {
 const sql = `SELECT * FROM users WHERE email = ?`;
 db.query(sql, [email], (err, res) => {
    if (err) {
      console.log('Error al buscar el usuario por email:', err);
      result(err, null);
    } else if (res.length) {
      // Aquí asumimos que el correo electrónico es único, por lo que solo debería haber un resultado
      result(null, res[0]);
    } else {
      result({ kind: 'not_found' }, null);
    }
 });
};

module.exports = User;