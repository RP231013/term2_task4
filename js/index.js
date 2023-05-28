let allCars = [];


regCars = () => {
    let carType = document.getElementById("carType").value
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value
    let regNo = +document.getElementById("regNo").value
    let condition = document.getElementById("condition").value

    allCars.push({
        type: carType,
        make: make,
        model: model,
        regNo: regNo,
        condition: condition
    });

    console.log(allCars);

    document.getElementById("carReg").reset();

}

