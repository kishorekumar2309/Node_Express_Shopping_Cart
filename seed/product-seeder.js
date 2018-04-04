var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 11
    }),
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 12
    }),
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 13
    }),
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 14
    }),
    new Product({
        imagePath: 'https://compass-ssl.xbox.com/assets/cf/7c/cf7cba96-8258-4fd2-afa0-9a8de00d1ee4.jpg?n=Windows-10-Games_Content-Placement-0_COD-Infinite-Warefare_740x417.jpg',
        title: 'Call of Duty: Infinite Warfare',
        description: 'Awesome Game!!!!!!',
        price: 15
    })
];

// for (let index = 0; index < products.length; index++) {
//     products[index].save(function(err, res){
//         done++;
//         if(done === products.length) {
//             exit();
//         }
//     });
// }

function insertDocuments(docs){
    var done = 0;

    function next(){
        if(done === docs.length) {
            exit();
        }
        else {
            docs[done++].save().then(function(dbResponse){
                next();
            });
        }
    }

    next();
}

function exit(){
    mongoose.disconnect();
}

insertDocuments(products);