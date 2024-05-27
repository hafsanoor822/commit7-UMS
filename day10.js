import inquirer from "inquirer";
class university {
    _name;
    _location;
    _numOfDep;
    _phoneNo;
    name = "default";
    location = "default";
    numOfDep = 11;
    phoneNo = 111;
    constructor(_name, _location, _numOfDep, _phoneNo) {
        this._name = _name;
        this._location = _location;
        this._numOfDep = _numOfDep;
        this._phoneNo = _phoneNo;
    }
}
class myUni extends university {
    _universityID;
    _name;
    _location;
    _numOfDep;
    _phoneNo;
    universityID = 1;
    constructor(_universityID, _name, _location, _numOfDep, _phoneNo) {
        super(_name, _location, _numOfDep, _phoneNo);
        this._universityID = _universityID;
        this._name = _name;
        this._location = _location;
        this._numOfDep = _numOfDep;
        this._phoneNo = _phoneNo;
    }
}
class human extends myUni {
    _naMe;
    _age;
    _email;
    _universityID;
    _name;
    _location;
    _numOfDep;
    _phoneNo;
    naMe = "default";
    age = 11;
    email = "huh@gmail.com";
    constructor(_naMe, _age, _email, _universityID, _name, _location, _numOfDep, _phoneNo) {
        super(_universityID, _name, _location, _numOfDep, _phoneNo);
        this._naMe = _naMe;
        this._age = _age;
        this._email = _email;
        this._universityID = _universityID;
        this._name = _name;
        this._location = _location;
        this._numOfDep = _numOfDep;
        this._phoneNo = _phoneNo;
    }
}
class teachers extends human {
    _teacHerID;
    _qualification;
    _dep;
    _naMe;
    _age;
    _email;
    _universityID;
    _name;
    _location;
    _numOfDep;
    _phoneNo;
    teacHerID = 11;
    qualification = "default";
    dep = "Cs";
    constructor(_teacHerID, _qualification, _dep, _naMe, _age, _email, _universityID, _name, _location, _numOfDep, _phoneNo) {
        super(_naMe, _age, _email, _universityID, _name, _location, _numOfDep, _phoneNo);
        this._teacHerID = _teacHerID;
        this._qualification = _qualification;
        this._dep = _dep;
        this._naMe = _naMe;
        this._age = _age;
        this._email = _email;
        this._universityID = _universityID;
        this._name = _name;
        this._location = _location;
        this._numOfDep = _numOfDep;
        this._phoneNo = _phoneNo;
    }
}
class students extends human {
    _studentID;
    _department;
    _semester;
    _naMe;
    _age;
    _email;
    _universityID;
    _name;
    _location;
    _numOfDep;
    _phoneNo;
    studentID = 111;
    department = "default";
    semester = 2;
    constructor(_studentID, _department, _semester, _naMe, _age, _email, _universityID, _name, _location, _numOfDep, _phoneNo) {
        super(_naMe, _age, _email, _universityID, _name, _location, _numOfDep, _phoneNo);
        this._studentID = _studentID;
        this._department = _department;
        this._semester = _semester;
        this._naMe = _naMe;
        this._age = _age;
        this._email = _email;
        this._universityID = _universityID;
        this._name = _name;
        this._location = _location;
        this._numOfDep = _numOfDep;
        this._phoneNo = _phoneNo;
        async function admission() {
            const option1 = await inquirer.prompt([{ name: "option1", type: "list", choices: ["Get admission", "Get result"], message: "Select one of the following:" }]);
        }
    }
}
