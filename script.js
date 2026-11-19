// Q1 :

let temperatures = [32, 35, 30, 34, 36, 31, 33];

let sum = 0;
let count = 0;

console.log("Weekly Temperatures:");

for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
    sum = sum + temperatures[i];
}

let average = sum / temperatures.length;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > average) {
        count++;
    }
}

console.log("Average Temperature:", average);
console.log("Days Above Average:", count);

// Q2 : 

let marks = [75, 45, 90, 60, 35, 80, 55, 95];

let highest = marks[0];
let lowest = marks[0];
let passed = 0;

console.log("Original Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Reverse Order:");

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Students Passed:", passed);

// Q3 :

let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let grandTotal = 0;
let highestTotal = 0;
let highestBranch = 0;

for (let i = 0; i < sales.length; i++) {

    let branchTotal = 0;

    console.log("Branch", i + 1);

    for (let j = 0; j < sales[i].length; j++) {
        console.log("Day", j + 1, ":", sales[i][j]);

        branchTotal = branchTotal + sales[i][j];
    }

    console.log("Branch Total:", branchTotal);

    grandTotal = grandTotal + branchTotal;

    if (branchTotal > highestTotal) {
        highestTotal = branchTotal;
        highestBranch = i + 1;
    }
}

console.log("Total Sales of All Branches:", grandTotal);
console.log("Highest Sales Branch:", highestBranch);
console.log("Highest Branch Sales:", highestTotal);

// Q4 : 

let stops = [2, 4, 6, 8, 10, 12];

let reversed = [];

console.log("Original Route:", stops);

for (let i = stops.length - 1; i >= 0; i--) {
    reversed.push(stops[i]);
}

console.log("Reversed Route:", reversed);

// Q5 :

let code = prompt("Enter Product Code:");

let productCode = code.toLowerCase();

let reversedCode = "";

for (let i = productCode.length - 1; i >= 0; i--) {
    reversedCode = reversedCode + productCode[i];
}

console.log("Entered Code:", code);

if (productCode == reversedCode) {
    console.log("This is a Palindrome.");
} else {
    console.log("This is not a Palindrome.");
}

// Q6 :

function calculatePrice(price, discount) {

    let discountAmount = price * discount / 100;

    let finalPrice = price - discountAmount;

    return finalPrice;
}

let result = calculatePrice(5000, 20);

console.log("Final Price:", result);

// Q7 :

function calculateBill(price, quantity) {

    let total = price * quantity;

    return total;
}

let bill = calculateBill(500, 4);

console.log("Total Restaurant Bill:", bill);

// Q8 :

function checkGrade(marks) {

    if (marks >= 85 && marks <= 100) {
        return "A";
    }

    else if (marks >= 70) {
        return "B";
    }

    else if (marks >= 50) {
        return "C";
    }

    else {
        return "Fail";
    }
}

let grade = checkGrade(78);

console.log("Student Grade:", grade);

// Q9 :

function calculateDelivery(orderAmount, distance) {

    let deliveryCharge = 0;

    if (orderAmount >= 2000) {

        if (distance > 5) {
            deliveryCharge = (distance - 5) * 20;
        }

    } else {

        if (distance <= 5) {
            deliveryCharge = 100;
        }

        else {
            deliveryCharge = 100 + (distance - 5) * 20;
        }
    }

    return deliveryCharge;
}

let orderAmount = 1500;
let distance = 8;

let charge = calculateDelivery(orderAmount, distance);

let finalBill = orderAmount + charge;

console.log("Order Amount:", orderAmount);
console.log("Delivery Charge:", charge);
console.log("Final Bill:", finalBill);

// Q10 :

function weeklySales(sales) {

    let total = 0;
    let count = 0;

    for (let i = 0; i < sales.length; i++) {

        total = total + sales[i];

        if (sales[i] >= 10000) {
            count++;
        }
    }

    let average = total / 7;

    return {
        totalSales: total,
        averageSales: average,
        targetDays: count
    };
}

let weeklySalesData = [12000, 9000, 11000, 8000, 15000, 10000, 13000];

let weeklySalesResult = weeklySales(weeklySalesData);

console.log("Total Weekly Sales:", weeklySalesResult.totalSales);

console.log("Average Daily Sales:", weeklySalesResult.averageSales);

console.log("Days Reached Target:", weeklySalesResult.targetDays);

if (weeklySalesResult.averageSales >= 10000) {

    console.log("Daily Sales Target Achieved.");

} else {

    console.log("Daily Sales Target Not Achieved.");

}