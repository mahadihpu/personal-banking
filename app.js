//login Button Event Handler
var loginButton = document.getElementById("login");
loginButton.addEventListener("click",function(){
    var loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit Button Event Handler
var depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click",function(){

    var depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount); //Deposit amount Input

    updateSpanText("currentDeposit",depositNumber);

    document.getElementById("deposit-amount").value = "";

    updateSpanText("currentBalance",depositNumber);

})
//withdraw Button Handler

const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click",function(){

    var withdrawAmount = document.getElementById("withdraw-amount").value;
    var withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText("currentWithdraw",withdrawNumber);

    document.getElementById("withdraw-amount").value = "";

    //withdraw Balance handling
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    var totalBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

})
    
function updateSpanText(id,depositNumber){
    const currentDeposit = document.getElementById(id).innerText;
    const currentDepositNumber = parseFloat(currentDeposit); //current Depost display
    var totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById(id).innerText = totalDeposit;
}