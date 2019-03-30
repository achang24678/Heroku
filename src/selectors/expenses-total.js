export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)       // get a numbers array (amount for each expense)
        .reduce((sum, value) => sum + value, 0);    // reduce it to one number (total sum)
};