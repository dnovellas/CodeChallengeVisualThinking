const VisualPartnersController = require("../../app/lib/controllers/VisualPartnersController");

describe("Test for VisualPartners Controller", ()=>{    
    test("1. Get all students", ()=>{
        const students = VisualPartnersController.getAllStudents();
        expect(students).not.toBe(null); 
        expect(students.length).toBeGreaterThan(0);         
    });

    test("2. get Certified Students mail", ()=>{
        const studentsMails = VisualPartnersController.getStudentsMailWithCertification();
        expect(studentsMails).not.toBe(null);
        expect(studentsMails.length).toBeGreaterThan(0);
    });

    test("3. Filter students by points", ()=>{
        const students = VisualPartnersController.filterStudentsWithCreditsGreaterThan(500);
        expect(students).not.toBe(null);
        expect(students.length).toBeGreaterThan(0);
    });
});