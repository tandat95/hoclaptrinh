const express = require('express');

const TramDo = require('./models/TramDo');

const app = express();
const port = 3000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded

app.get('/getData', (req, res) => {
    // Giả dụ khúc này là lấy data ở database lên
    const dataFromDb = [
        {
            "title": "Trạm đo 1",
            "lat": 10.772040788875298,
            "lng": 106.62759866721333,
            "CO2": 100,
            "03": 50,
            "AQI": 2,
            "color": "#1a4ce4"
        }
    ]

    res.send(dataFromDb);
});

app.get('/getAQI', async (req, res) => {
    // lấy data từ DB lên
    // khúc này xử lý tính toán theo công thức
    // cuối cùng ra đc cái số này

    const rs = await TramDo.find({title: "Trạm đo 3"}).exec();

    const ketQuaTraVe = {
        data: rs
    }

    res.send(ketQuaTraVe);
});

app.get('/xoaTramDo', async (req, res) => {
  
    const rs = await TramDo.delete({title: "Trạm đo 3"}).exec();

    const ketQuaTraVe = {
        data: rs
    }

    res.send(ketQuaTraVe);
});


app.post('/themTramDo', (req, res) => {
    // data bên dưới truyền lên sẽ nằm trong req.body

    var tramDo = new TramDo(req.body);
    tramDo.save();

    res.send({
        status: "ok"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});