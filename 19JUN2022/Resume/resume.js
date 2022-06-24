const Resume = {
     Name: ":John Doe",
    Role: ":Programmer",
    Email: ":john@gmail.com",
    Phone: ":(912) 555-4321",
    Skillset: ":Deep knowledge in Python, Javascript, CSharp",
    Location: {
      Address: "2712 Broadway St",
      PostalCode: "CA 94115",
      City: "San Francisco",
       Region: "California",
      Country: "United States"
    }
    };
    
    Object.keys(Resume).forEach(key => {

      console.log(key, Resume[key]);
  
  })
