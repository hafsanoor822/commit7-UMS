import inquirer from "inquirer";
import chalk from "chalk"
class university{
    name:string ="default";
    location:string= "default"
    numOfDep:number=11
    phoneNo:number=111
    constructor(public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){}

}
class myUni extends university{
universityID:number=1
constructor(public _universityID:number,public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_name,_location,_numOfDep,_phoneNo)
}
}

class human extends myUni{
naMe:string="default"
age:number=11
email:string="huh@gmail.com"
constructor(public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number ){
    super(_universityID,_name,_location,_numOfDep,_phoneNo)
}
}
class teachers extends human{
    teacHerID:number=11
qualification:string="default"
dep:string="Cs"
constructor(public _teacHerID:number,public _qualification:string,public _dep:string,public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_naMe,_age,_email,_universityID,_name,_location,_numOfDep,_phoneNo)
}
}
class students extends human{
studentID:number=111
department:string="default"
semester:number=2
constructor(public _studentID:number,public _department:string,public _semester:number,public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_naMe,_age,_email,_universityID,_name,_location,_numOfDep,_phoneNo)

  getAdmission(){
//         const option1= await inquirer.prompt([{name:"option1",type:"list",choices:["Get admission","Get result"],message:"Select one of the following:"}])
// if(option1.option1=="Get admission"){
//     const option2= await inquirer.prompt([{name:"option2",type:"text",message:"Enter your full name:"}])
//     const option3= await inquirer.prompt([{name:"option3",type:"number",message:"Enter your age:"}])
//     const option4= await inquirer.prompt([{name:"option4",type:"text",message:"Enter your E-mail:"}])
//     const option5= await inquirer.prompt([{name:"option5",type:"list",choices:["Science","computer science","Maths","Agriculture"],message:"Select your department::"}])
//     const option6= await inquirer.prompt([{name:"option6",type:"number",message:"Enter the semester you want to get admission to:"}])

// }
// else if(option1.option1=="Get result"){

// }
// else{console.log("Select at least one of the following option")} 
//     }

// }
}
var stObj= new students(121,option5.option5,option6.option6,option2.opton2,option3.option3,option4.option4,1,"University of Agriculture","jail road",4,1122)
stObj.getAdmission()