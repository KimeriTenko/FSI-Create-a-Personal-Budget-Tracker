let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

window.prompt(weeklyExpenseQuestions[0])

let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
console.log(answer)

for(let i=0; i < weeklyExpensesQuestions.length; i++){
    let answer= parseFloat(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses = weeklyExpenses + answer
}


