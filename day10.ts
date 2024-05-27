import inquirer from "inquirer";
import chalk from "chalk"
class university{
    name:string ="default";
    location:string= "default"
    numOfDep:number=11
    phoneNo:number=111
    constructor(public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){}

}
type stuLi={naMe:string,age:number,email:string,studentID:number,department:string,semester:number}
class myUni extends university{
universityID:number=1
 studentsList:stuLi[]=[{
    naMe: "Abu Hurairah",
    age: 21,
    email: "hurairah@gmail.com",
    studentID : 1,
    department: "CS",
    semester: 6
 },
    ]
constructor(public _universityID:number,public _studentList:stuLi[],public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_name,_location,_numOfDep,_phoneNo)
}
}

class human extends myUni{
naMe:string="default"
age:number=11
email:string="huh@gmail.com"
constructor(public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _studentList:stuLi[],public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number ){
    super(_universityID,_studentList,_name,_location,_numOfDep,_phoneNo)
}
}
class teachers extends human{
    teacHerID:number=11
qualification:string="default"
dep:string="Cs"
constructor(public _teacHerID:number,public _qualification:string,public _dep:string,public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _studentList:stuLi[],public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_naMe,_age,_email,_universityID,_studentList,_name,_location,_numOfDep,_phoneNo)}
    getHired(){}
    getMyInfo(){}

}
class students extends human{
studentID:number=111
department:string="default"
semester:number=2
constructor(public _studentID:number,public _department:string,public _semester:number,public _naMe:string,public _age:number,public _email:string,public _universityID:number,public _studentList:stuLi[],public _name:string,public _location:string,public _numOfDep:number,public _phoneNo:number){
    super(_naMe,_age,_email,_universityID,_studentList,_name,_location,_numOfDep,_phoneNo)}

 async getAdmission(){

    const option2= await inquirer.prompt([{name:"option2",type:"text",message:"Enter your full name:"}])
    const option3= await inquirer.prompt([{name:"option3",type:"number",message:"Enter your age:"}])
    const option4= await inquirer.prompt([{name:"option4",type:"text",message:"Enter your E-mail:"}])
    const option5= await inquirer.prompt([{name:"option5",type:"list",choices:["Science","computer science","Maths","Agriculture"],message:"Select your department::"}])
    const option6= await inquirer.prompt([{name:"option6",type:"number",message:"Enter the semester you want to get admission to:"}])
    function addStudent(newStudent:{name:string,age:number,friendSince:number}){
        
        studentsList.push(newStudent)
        var newStudentListA=studentsList
        return newStudentListA
        }
        var updatedListAfterAdd=addStudent({
            naMe: "Hafsa Noor",
            age: 22,
            email: "hafsa@gmail.com",
            studentID : 2,
            department: "CS",
            semester: 7 })
        console.log("The updated list after adding item",updatedListAfterAdd)

    }
getResult(){}
}

// var stObj= new students(121,option5.option5,option6.option6,option2.opton2,option3.option3,option4.option4,1,"University of Agriculture","jail road",4,1122)
// stObj.getAdmission()

//logics
//student or teacher
    const stuTea= await inquirer.prompt([{name:"stuTea",type:"list",choices:["Student","Teacher"],message:"Are you a student or a teacher:"}])
//STUDENT
    if(stuTea.stuTea=="Student"){
//admission or result
    const adResult= await inquirer.prompt([{name:"adResult",type:"list",choices:["Get Admission","See result"],message:"Do you want to get admission or see your result:"}])
//admission
    if(adResult.adResult=="Get Admission"){

}
//result
else if(adResult.adResult=="See result"){

}
else{console.log("Please select one of the following option")}
}
//TEACHER
else if(stuTea.stuTea=="Teacher"){
    const infoHi= await inquirer.prompt([{name:"infoHi",type:"list",choices:["Get Hired","See info"],message:"Do you want to get hired or see your information:"}])
//get hired
if(infoHi.infoHi=="Get Hired"){

}
else if(infoHi.info=="See info"){

}
else{console.log("Please select one of the following option")}
}
else{console.log("Please select one of the following option")}