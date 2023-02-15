document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodPrice = getInputFieldValueById('food');
    const rentPrice = getInputFieldValueById('rent');
    const clothesPrice = getInputFieldValueById('clothes')
    const incomeAmount = getInputFieldValueById('income');

    const totalCastPrice = foodPrice + rentPrice + clothesPrice;
    setInputValue('total-expense', totalCastPrice)


    const remainBalance = incomeAmount - totalCastPrice;
    setInputValue('balance', remainBalance)

})

document.getElementById('btn-save').addEventListener('click', function () {
    const incomeAmount = getInputFieldValueById('income');
    const saveAmount = getInputFieldValueById('save');
    const remainBalanceElement = getElementValueById('balance')


    const saveBalance = (incomeAmount / 100) * saveAmount;
    setInputValue('saving-amount', saveBalance)


    const remainBalanceAmount = remainBalanceElement - saveBalance;
    console.log(remainBalanceAmount)
    setInputValue('remain-balance', remainBalanceAmount)

})