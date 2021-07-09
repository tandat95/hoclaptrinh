
// chữ L đại diện cho thư viện leaflet map, bởi vì thư viện map đã được load bên trên nên chỗ này chữ L mới có giá trị nha
// L.map là hàm tạo ra đối tượng map, hàm này nhận tham số truyền vào là một id của 1 thẻ html, con map này sẽ render vào thẻ đó.
// hàm setView nhận vào 2 tham số: 
// - tham số thứ nhất là một mảng tọa độ [lattitude, longitude], tham số này chính là center của map
// - tham số thử hai là mức độ zoom, dao động từ 0-20, số càng lớn thì zoom càng chi tiết
// Dòng code bên dưới có thể viết lại thành: 
// var myMap = L.map('mapid');
// myMap.setView([10.767740528462861, 106.67437639324726], 13);

var mymap = L.map('mapid').setView([10.767740528462861, 106.67437639324726], 13);

// Đoạn này là gắn cho con map một cái style,
// Có thể tham khảo ở trang https://leaflet-extras.github.io/leaflet-providers/preview/ để thay đỏi style tùy thích
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Bài tập: 
// 1. Thêm marker vào map
// 2. Thêm 1 popup vào map. Gợi ý:
//      - Tạo 1 đối tượng popup, tham số tuyền vào là 1 đối tượng popup-option
//      - Set latlong cho popup (hàm setLatLng)
//      Tài liệu tham khảo: 
//           - https://leafletjs.com/reference-1.7.1.html#popup
//           - https://leafletjs.com/reference-1.7.1.html#popup-option


var data = [
    {
        "title": "Trạm đo 1",
        "lat": 10.772040788875298,
        "lng": 106.62759866721333,
        "CO2": 100,
        "03": 50,
        "AQI": 2,
        "color": "#1a4ce4"
    },
    {
        "title": "Trạm đo 2",
        "lat": 10.767002732561822,
        "lng": 106.63454022431067,
        "CO2": 100,
        "03": 50,
        "AQI": 2,
        "color": "#46de34"
    },
    {
        "title": "Trạm đo 3",
        "lat": 10.761954051832364,
        "lng": 106.62723388682167,
        "CO2": 100,
        "03": 50,
        "AQI": 2,
        "color": "#bd0ed2"
    }
]

// var getData = function () {
//     var url = 'http://localhost:3000/getAQI';

//     var option = {
//         method: 'GET'
//     }
//    //trong thời gian đợi thằng này lấy data về
//     fetch(url, option).then(function (rs) {
//         rs.json().then(data => {
//             console.log(data);
//             console.log("tao đã về");
//         })
//     });

//     // thì những dòng code bên dưới này nó cũng chạy, 
//     console.log('làm biếng đợi data quá, tao chạy trước đây')
// }
/*
const getData =  async  () =>l {
    var url = 'http://localhost:3000/getAQI';

    var option = {
        method: 'GET'
    }

    const rs = await fetch(url, option);
    const data = await rs.json();
    console.log(data);
}


getData();
*/

// var themTramDo = function () {
//     var url = 'http://localhost:3000/themTramDo';

//     var tramdo = {
//         "title": "Trạm đo 3",
//         "lat": 10.761954051832364,
//         "lng": 106.62723388682167,
//         "CO2": 100,
//         "03": 50,
//         "AQI": 2,
//         "color": "#bd0ed2"
//     }

//     var option = {
//         method: 'POST',
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(tramdo)
//     }

//     fetch(url, option).then(function (rs) {
    
//         rs.json().then(data => {
//             console.log(data);
//         })
//     });
// }
// themTramDo();