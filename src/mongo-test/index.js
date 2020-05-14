import mongodb from "mongodb";
let mongoClient = mongodb.MongoClient;
var url = "mongodb://root:123456@10.6.65.219:8024";

mongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("pxm");
  var myobj = { name: "菜鸟教程", url: "www.runoob" };
  dbo.collection("pxm").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("文档插入成功");
    db.close();
  });
});
