abstract class Department {
  static fiscalYear: string = "2020";
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(Department.fiscalYear);
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    return `Employee Count: ${this.employees.length} | ${this.employees}`;
  }

  static createEmployee(name: string) {
    return { name };
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(name: string) {
    if (name === "Ben") {
      return;
    }
    this.employees.push(name);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No Report Found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a value");
    }

    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");

    this.reports = reports;
    this.lastReport = this.reports[this.reports.length - 1];
  }

  describe() {
    console.log(`Department: ${this.name}`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

class SalesDepartment extends Department {
  private static instance: SalesDepartment;

  private constructor(id: string, name: string) {
    super(id, name);
  }

  static getInstance() {
    if (SalesDepartment.instance) {
      return this.instance;
    }
    this.instance = new SalesDepartment("id", "Sales Department");

    return this.instance;
  }
}

const salesDepartmentInstance = SalesDepartment.getInstance();
console.log(salesDepartmentInstance);

// const department_0 = new ITDepartment("dept_0", ["Benito"]);

// const department_1 = new AccountingDepartment("dept_1", []);

// const employee1 = Department.createEmployee("Ben");

// department_1.addEmployee("Ben");
// department_1.addEmployee("Not Ben");

// department_1.addReport("hello");
// console.log(department_1.mostRecentReport);
// department_1.mostRecentReport = "cookies";
// console.log(department_1.mostRecentReport);

// console.log(department_1.describe());
// department_1.addEmployee("ben");
// department_1.addEmployee("steven");
// console.log(department_1.printEmployeeInformation());
