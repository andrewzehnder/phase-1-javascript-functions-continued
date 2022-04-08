function saturdayFun(activity) {
    if (typeof activity === 'undefined') {
        activity = "roller-skate"
    }
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(mondayActivity) {
    if (typeof mondayActivity === 'undefined') {
        mondayActivity = "go to the office"
    }
    return (`This Monday, I will ${mondayActivity}.`)
}

function wrapAdjective(highlight) {
    return function(emphatic = "special") {
        if (highlight === "*") {
            emphatic = "a hard worker";
        }
        if (highlight === "||") {
            emphatic = "a dedicated programmer";
        }
        return `You are ${highlight}${emphatic}${highlight}!`;
    }
}
