let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "dmo24pslds1n1waf",
    password: "uafkm1ckmrnnwla4",
    database: "rnfvvq71o53r8s99"
  });
}


module.exports = connection;