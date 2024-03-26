class SalonComponent {
    constructor(name) {
      this.name = name;
    }
  
    getSalary() {
      return 0; 
    }
  }
  
  class Employee extends SalonComponent {
    constructor(name, salary) {
      super(name);
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  class Department extends SalonComponent {
    constructor(name) {
      super(name);
      this.employees = [];
    }
  
    add(employee) {
      this.employees.push(employee);
    }
  
    remove(employee) {
      const index = this.employees.indexOf(employee);
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    }
  
    getSalary() {
      let totalSalary = 0;
      for (const employee of this.employees) {
        totalSalary += employee.getSalary();
      }
      return totalSalary;
    }
  }
  
  // Teste da implementação
  const hairStylist1 = new Employee("Maria Jordana", 2000);
  const hairStylist2 = new Employee("Maria Eugenia", 1800);
  const nailTechnician1 = new Employee("Betina", 1500);
  const nailTechnician2 = new Employee("Juliana", 1550);
  
  const hairStylingDept = new Department("Hair Styling Department");
  hairStylingDept.add(hairStylist1);
  hairStylingDept.add(hairStylist2);
  
  const nailDept = new Department("Nail Department");
  nailDept.add(nailTechnician1);
  nailDept.add(nailTechnician2);
  

  const beautySalon = new Department("Beauty Salon");
  beautySalon.add(hairStylingDept);
  beautySalon.add(nailDept);
  
  console.log("Salário total do salão de beleza:", beautySalon.getSalary());
  console.log("Manicure registrada:", nailTechnician2);
  