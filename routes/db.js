/**
 * Created by lenovo on 2017/3/14.
 */
var mysql      = require('mysql');
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'stkj'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}
exports.query = query;