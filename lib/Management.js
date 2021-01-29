// TODO: Write code to define and export the Employee class
class Managment {
    constructor(title, salary, department_id){
        this.title = title ;
        this.salary = salary;
        this.department_id = department_id;

    };
    getTitle(){
        return this.title;
    };
    getDeptID(){
        return this.department_id;
    };
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Managment