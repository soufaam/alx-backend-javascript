export default function createIteratorObject(report) {
  const departements = Object.keys(report.allEmployees);
  const table = [];
  for (const departement of departements) {
    table.push(...report.allEmployees[departement]);
  }
  return table;
}
