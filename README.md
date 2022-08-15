# NodeJS
### Install packages nodemon
```
npm run dev 
npm run start
```
### URL https://www.npmjs.com/package/nodemon
```
npm i nodemon 
```
### URL https://www.npmjs.com/package/mysql
```
npm i mysql
```
### Method Update Database 

##### Method PATCH
 * HTTP.PATCH ใช้เมื่อ Client ส่งข้อมูลมาสู่ Server โดยมากจะใช้เพื่อทำการ Update 
 * ข้อมูลที่มีอยู่แล้วในระบบ แต่จะแตกต่างกัน ที่เห็นได้ชัดก็คือ ข้อมูลที่จะถูกส่งเข้ามา ไม่จำเป็นต้องส่งเข้ามาทั้งหมด
 * ส่งมาแค่ฟิลด์ที่ต้องการจะแก้ไขเท่านั้น ฟิลด์ไหนที่ไม่ถูกส่งมาจะไม่ถูก Update
 * retrun status code จะได้  200
```
app.put("/users", function (req, res, next) {
  connection.query(
    "UPDATE `users` SET `fname`= ?, `lname`= ?, `username`= ?, `password`= ? WHERE id = ?",
    [
      req.body.fname,
      req.body.lname,
      req.body.username,
      req.body.password,
      req.body.id,
    ],
    function (err, results) {
      res.json(results);
    }
  );
});
```
 
##### Method PUT
 * HTTP.PUT ใช้เมื่อ Client ส่งข้อมูลมาสู่ Server โดยมากจะใช้เพื่อทำการ Update ข้อมูลที่มีอยู่แล้วในระบบ 
 * จะใช้ Path เดียวกันกับ Method POST ก็ได้ เพียงแค่เพิ่ม Context path เข้าไปแล้วเปลี่ยน Method ที่รับ
 * retrun status code จะได้  201
```
 app.patch("/users", function (req, res, next) {
    connection.query(
      "UPDATE `users` SET `fname`= ?, `lname`= ?  WHERE id = ?",
      [
        req.body.fname,
        req.body.lname,
        req.body.id,
      ],
      function (err, results) {
        res.json(results);
      }
    );
});
```
##### Method DELETE
* code API สำหรับ DELETE (by id)
```
app.delete("/users", function (req, res, next) {
    connection.query(
      "DELETE FROM `users` WHERE id = ?",
      [req.body.id],
      function (err, results) {
        res.json(results);
      }
    );
  });
```

##### Method GET
* code API สำหรับ READ (all)
```
app.get("/users", function (req, res, next) {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    res.json(results);
  });
});
```
* code API สำหรับ READ (by id)
```
app.get("/users/:id", function (req, res, next) {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM `users` WHERE `id` = ?",
    [id],
    function (err, results) {
      res.json(results);
    }
  );
});
```

##### Method POST
* code API สำหรับ CREATE Insert Database
```
app.post("/users", function (req, res, next) {
  connection.query(
    "INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.fname,
      req.body.lname,
      req.body.username,
      req.body.password,
      req.body.avatar,
    ],
    function (err, results) {
      res.json(results);
    }
  );
});
```
