document.getElementById('dipositbtn').addEventListener('click', function () {

    if (document.getElementById('depositfield').value === " " || document.getElementById('depositfield').value < 0) {
        alert("Please enter a valid amount")
        return;
    }

    const diposit = document.getElementById('depositfield').value;
    const dipositAmout = parseFloat(diposit);
    const initialDiposit = document.getElementById('totaldeposit').innerText;
    const initialDipositAmout = parseFloat(initialDiposit);
    const totalDiposit = dipositAmout + initialDipositAmout;
    document.getElementById('totaldeposit').innerText = totalDiposit;
    document.getElementById('depositfield').value = " ";


    const currentBalance = document.getElementById('totalbalance').innerText;
    const currentBalanceAmout = parseFloat(currentBalance);
    const totalBalance = currentBalanceAmout + dipositAmout;
    document.getElementById('totalbalance').innerText = totalBalance;
    document.getElementById('depositfield').value = " ";


});
