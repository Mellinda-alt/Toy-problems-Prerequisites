function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const payee = 0.2 * grossSalary;
    const nhif = 0.1 * grossSalary;
    const nssf = 0.2 * grossSalary;

    const netSalary = grossSalary - (payee + nhif + nssf);

    return netSalary;
}

const basicSalary = 59000;
const benefits = 4500;



const netSalary = calculateNetSalary(basicSalary,benefits);
console.log("Net Salary:" + netSalary);