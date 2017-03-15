var express = require('express');
var router = express.Router();

var db = require('./db.js');

/* GET users listing. */
router.get('/login', function(req, res, next) {
    var sql = 'select * from User WHERE user_name = "' + req.query.name + '"';
    db.query(sql, function (err, rows) {
        if (err) {
            res.json(
                {
                    code: '-200',
                    msg: '操作失败'
                }
            );
        } else {
              res.json(
                  {
                      code: '0',
                      dataMap: rows,
                      msg: '查询成功'
                  }
              );
        }
    });
});

router.get('/register', function(req, res, next) {
    var sql = 'select * from User WHERE user_name = "' + req.query.name + '"';
    db.query(sql, function (err, rows) {
        if (err) {
            res.json(
                {
                    code: '-200',
                    msg: '操作失败'
                }
            );
        } else {
            res.json(
                {
                    code: '0',
                    dataMap: rows,
                    msg: '查询成功'
                }
            );
        }
    });
});

module.exports = router;
