const VisualPartnersController = require("./controllers/VisualPartnersController");
// Usando objeto express
const express = require("express");
// App de express
const app = express();
app.use(express.json());
// Puerto en que vamos a ver la app: locahost:3000
const port = 3000;

// path inicial, responderá a la url localhost:3000
app.get("/", (request, response)=>{
    response.json({message: "VisualPartnership Api welcome!"});
});

app.get("/v1/students", (request, response)=>{    
    const visualpartners = VisualPartnersController.getAllStudents();
    response.json(visualpartners);
});

app.get("/v1/students/emails/", (request, response)=>{    
    const visualpartners = VisualPartnersController.getStudentsMailWithCertification();
    response.json(visualpartners);
});

app.get("/v1/students/credits/:credits", (request, response)=>{
    const credits = request.params.credits;
    const filteredByCredits = VisualPartnersController.filterStudentsWithCreditsGreaterThan(credits);    
    response.json({credits: request.params.credits, visualpartners: filteredByCredits});
});

//Con esto se inicializa la app
app.listen(port, ()=> {
    console.log(`VisualPartners API in localhost:${port}`);
});
