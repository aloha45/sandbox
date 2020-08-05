const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];  

let countedVehicles = data.reduce(function(allVehicles, type) {
    if (type in allVehicles) {
        allVehicles[type]++
    } 
    else {
        allVehicles[type] = 1
    }
     return allVehicles
  },{})
console.log(countedVehicles)

