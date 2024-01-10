let employee = {name: 'Claries', streetAddress: 'Birmingham'}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const deletedKey = { ...employee };
  delete deletedKey[key];
  return deletedKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}