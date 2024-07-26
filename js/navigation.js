// Navigation Button
const dashboard = document.querySelector("#dashboard");
const summary = document.querySelector("#summary");
const settings = document.querySelector("#settings");
const expenses = document.querySelector("#expenses");
const budget = document.querySelector("#budget");

// Navigation sub items
const expense_subs = document.querySelector(".expense-subs");
const budget_subs = document.querySelector(".budget-subs");

// Contents Divs to change
const dashboard_content = document.querySelector(".dashboard");
const expense_content = document.querySelector(".expenses");
const budget_content = document.querySelector(".budget")
const summary_content = document.querySelector(".summary")
const settings_content = document.querySelector(".settings")

const navigations = [dashboard, expenses, budget, summary, settings];
const content_to_show = [
    dashboard_content,
    expense_content,
    budget_content,
    summary_content,
    settings_content,
];


navigations.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".content").forEach(object => {
            object.style.display = "none"
        })
        button_index = navigations.indexOf(button)
        content = content_to_show[button_index]
        content.style.display = "block"
        return false;
    })
})

expenses.addEventListener("click", () => {
    if (budget_subs.style.display === "none") {
        expense_subs.style.display = "block";
    } else {
        budget_subs.style.display = "none";
        expense_subs.style.display = "block";
    }

    return false;
});
budget.addEventListener("click", () => {
    if (expense_subs.style.display === "none") {
        budget_subs.style.display = "block";
    } else {
        expense_subs.style.display = "none";
        budget_subs.style.display = "block";
    }
    return false;
});
