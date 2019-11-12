//  class in ES6
class Worker{
    constructor(name, profession, department){
        this._name = name;
        this._profession = profession;         
        this._department = department; 
    }
    toString(){
        return `My name ${this._name}. I am a ${this._profession}.`;
    }
    
    set profession(newProfession){       
        this._profession = newProfession;
    }
    
    get profession(){
        return this._profession;
    }

    set department(newDepartment){       
        this._department = newDepartment;
    }
    
    get department(){
        return this._department;
    }
    getDepartment() {
        return 'My Department is ' +  this._department;
          
        };
}

module.exports = Worker; 