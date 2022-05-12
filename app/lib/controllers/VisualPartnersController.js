const Reader = require("../utils/Reader");
const VisualPartnersService = require("../services/VisualPartnersService");

class Controller{
   
    static getAllStudents(){
        const students = Reader.readJsonFile("visualpartners.json"); 
        const allStudents = VisualPartnersService.getAllStudents(students);  
        return allStudents;
    }

    static getStudentsMailWithCertification(){
        const students = Reader.readJsonFile("visualpartners.json");
        const studentsMails = VisualPartnersService.getStudentsMailWithCertification(students);        
        return studentsMails;
    }

    static filterStudentsWithCreditsGreaterThan(credits){
        const students = Reader.readJsonFile("visualpartners.json");
        const filteredStudents = VisualPartnersService.filterStudentsWithCreditsGreaterThan(students, credits);      
        return filteredStudents;
    }
}

module.exports = Controller;