const Reader = require("../../app/lib/utils/Reader");
const VisualPartnersService = require("../../app/lib/services/VisualPartnersService");

describe("Test for VisualPartners Service", ()=>{    
    test("1. Get all students", ()=>{
        const studentsRAW = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo         
        expect(Object.keys(studentsRAW).length).toBeGreaterThan(0);

        const students = VisualPartnersService.getAllStudents(studentsRAW);
        expect(students).not.toBe(null); 
        expect(students.length).toBeGreaterThan(0);         
    });

    test("2. get Certified Students mail", ()=>{
        const studentsRAW = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo         
        expect(Object.keys(studentsRAW).length).toBeGreaterThan(0);

        const studentsMails = VisualPartnersService.getStudentsMailWithCertification(studentsRAW);
        expect(studentsMails).not.toBe(null);
        expect(studentsMails.length).toBeGreaterThan(0);
    });

    test("3. Filter students by points", ()=>{
        const studentsRAW = Reader.readJsonFile("visualpartners.json"); // esto regresa la lista de explorers del archivo         
        expect(Object.keys(studentsRAW).length).toBeGreaterThan(0);

        const students = VisualPartnersService.filterStudentsWithCreditsGreaterThan(studentsRAW, 500);
        expect(students).not.toBe(null);
        expect(students.length).toBeGreaterThan(0);
    });
});