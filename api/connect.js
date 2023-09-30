import mysql from 'mysql'


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "XVENmbig86",
    database: "social"
})

