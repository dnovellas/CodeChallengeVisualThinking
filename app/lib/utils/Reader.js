const fs = require("fs");

class Reader{
    static readJsonFile (path){
        const rawdata = fs.readFileSync(path);
        const visualPartners = JSON.parse(rawdata);
        return visualPartners;
    }
}

module.exports = Reader;