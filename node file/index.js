const fs = require('node:fs');
const fsAsync = require ('node:fs/promises');



 function createFileCB() {
     fs.appendFile('time.txt','its 12:30PM',(err) => {
         if (err)console.log("Error creating file",err)
         else console.log("Succes creating file")    
     })
 }
   
 


 async function createFileAsync() {
      const response = await fsAsync.appendFile("./files/date-time.txt","now its 13 PM and 18/07/2024");
      console.log(response)
  }

   



  function readAllFileFromDir(){
     fs.readdir("./files",(err,files)=>{
         if(err)console.log(err)
         if(files)console.log(files)
     })
   }
   readAllFileFromDir();

