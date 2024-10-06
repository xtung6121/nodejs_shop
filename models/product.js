const fs = require('fs')
const path = require('path')
module.exports = class Product {
    constructor(title){
        this.title = title;

    }
    save(){
        const p = path.join(path.dirname(require.main.filename),
        'data',
        'product.json'
        );
        fs.readFile(p, (err, fileContent) => {          
            console.log(fileContent);
            let product = [];

            if(!err) {
                product = JSON.parse(fileContent);
            }
            product.push(this);
            fs.writeFile(p, JSON.stringify(product),(err) =>{ console.log('ERROR:', err) });
        })
    };
    
    static fetchAll(cb){
        fs.readdFile(p, (err, fileContent)=> {
            if(err) {
                cb([]);
            } 
            cb(JSON.parse(fileContent));
        })
    }
}