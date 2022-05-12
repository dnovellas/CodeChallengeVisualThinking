class VisualPartnersService{
    static getAllStudents(students){        
        return students;
    }

    static getStudentsMailWithCertification(students){
        const studentsWithCertification = students.filter((student)=>(student.haveCertification == true));
        const stundentsEmails = studentsWithCertification.map((student) => student.email);
        return stundentsEmails;
    }

    static filterStudentsWithCreditsGreaterThan(students, credits){
        const filteredByCredits = students.filter((student)=>(student.credits >= credits));        
        return filteredByCredits;
    }   
}

module.exports = VisualPartnersService;