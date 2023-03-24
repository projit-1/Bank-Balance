document.getElementById('withdrowbtn').addEventListener('click', function () {

    const withdrow = document.getElementById('withdrowfield').value;
    const withdrowAmout = parseFloat(withdrow);
    const currentBalance = document.getElementById('totalbalance').innerText;
    const currentBalanceAmout = parseFloat(currentBalance);

    if (withdrowAmout > currentBalanceAmout) {
        alert("You don't have enough balance")
        return
    }

    const initialWithdrow = document.getElementById('totalwithdrow').innerText;
    const initialWithdrowAmout = parseFloat(initialWithdrow);
    const totalWithdrow = withdrowAmout + initialWithdrowAmout;
    document.getElementById('totalwithdrow').innerText = totalWithdrow;
    document.getElementById('withdrowfield').value = " ";


    const totalBalance = currentBalanceAmout - withdrowAmout;
    document.getElementById('totalbalance').innerText = totalBalance;
    document.getElementById('withdrowfield').value = " ";

})