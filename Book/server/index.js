
var express = require("express");
var multer = require("multer");
var path = require("path");

var app = express();

// Route này trả về cái form upload cho client
app.get("/upload", (req, res) => {
  res.sendFile(path.join(`${__dirname}/view/file.html`));
});

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
var diskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    // Định nghĩa nơi file upload sẽ được lưu lại
    callback(null, "./upload");
  },
  filename: (req, file, callback) => {
    var filename = `${file.originalname}`;
    callback(null, filename);
  }
});
app.use(express.urlencoded({ extended: false }))

// Khởi tạo middleware uploadFile với cấu hình như ở trên,
// Bên trong hàm .single() truyền vào name của thẻ input, ở đây là "file"
var uploadFile = multer({storage: diskStorage}).single("file");

// Route này Xử lý khi client thực hiện hành động upload file
app.post("/upload", (req, res) => { 
  // Thực hiện upload file, truyền vào 2 biến req và res
  uploadFile(req, res, (error) => {
    // Nếu có lỗi thì trả về lỗi cho client.
    if (error) {
      return res.send(`Error when trying to upload: ${error}`);
    }
    // Không có lỗi thì lại render cái file về cho client.
    // Đồng thời file đã được lưu vào thư mục uploads
    res.sendFile(path.join(`${__dirname}/upload/${req.file.filename}`));
  });
});
 
app.listen(3000, "localhost", () => {
  console.log(`Hello, I'm running at localhost:3000`);
});
 
//   app.get('/', function (req, res) {
//     // res.sendFile('view/index.html', { root: __dirname });
// res.sendfile('../src/index.html')
//   })
app.get('/', (req,res)=> res.send('HELLO'))
  //lets require/import the mongodb native drivers.
var mongoose = require('mongoose');

//Nhập mô-đun mongoose
var mongoose = require('mongoose');

//Thiết lập một kết nối mongoose mặc định
var mongoDB = 'mongodb://127.0.0.1/book';
mongoose.connect(mongoDB);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));