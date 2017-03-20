/**
 * Created by NamTV on 3/20/2017.
 */
var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCjwoiqgwDNZX6cOKFC4M6HtuyKL5tLb98'
});
/*
* Các API hay
 - Lấy GPS location từ Address
 https://github.com/googlemaps/google-maps-services-js
 - Lấy City và Country từ IP
 http://ip-api.com/
 -
* */
// Geocode an address.
googleMapsClient.geocode({
    address: 'Tầng 20, Toà nhà Vinaconex 9, Lô HH2-2 KĐT Mễ Trì Hạ, Đường Phạm Hùng, Mễ Trì, Từ Liêm, Hà Nội'
}, function (err, response) {
    if (!err) {
        console.log(JSON.stringify(response.json));
    }
});
