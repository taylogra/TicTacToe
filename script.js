let createTable = function(){

    let table = document.createElement("TABLE");

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");

    let data1 = document.createElement("Td");
    let data2 = document.createElement("Td");
    let data3 = document.createElement("Td");
    let data4 = document.createElement("Td");
    let data5 = document.createElement("Td");
    let data6 = document.createElement("Td");
    let data7 = document.createElement("Td");
    let data8 = document.createElement("Td");
    let data9 = document.createElement("Td");

    data1.innerText = "x";
    data2.innerText = "o";
    data3.innerText = "x";
    data4.innerText = "o";
    data5.innerText = "x";
    data6.innerText = "o";
    data7.innerText = "x";
    data8.innerText = "o";
    data9.innerText = "x";


    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);

    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    let content = document.getElementById("table");
    content.appendChild(table);
};












