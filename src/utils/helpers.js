function getKey(ticket, groupBy) {
    if (groupBy === "priority") return getPriorityLabel(ticket.priority);
    if (groupBy === "user") return ticket.userId;
    return ticket.status
}
function getGroupedTickets(tickets, groupby) {
    const groups = {};
    for (const ticket of tickets) {
        const key = getKey(ticket, groupby);
        if (key in groups) {
            groups[key].push(ticket);
        } else groups[key] = [ticket];
    }

    if (groupby === "status" || groupby === "priority") {
        const order = groupby === "status" ? ["Backlog", "Todo", "In progress", "Done", "Canceled"]
            : ["No priority", "Low", "Medium", "High", "Urgent"];
        const newGroup = {};
        for (const key of order) {
            newGroup[key] = groups[key] || [];
        }
        return newGroup;
    }

    return groups;
}

export function getPriorityLabel(priority) {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
}

function orderByPriority(tickets) {
    tickets.sort((ticket1, ticket2) => ticket2.priority - ticket1.priority);
}
function orderByTitle(tickets) {
    tickets.sort((ticket1, ticket2) => ticket1.title < ticket2.title ? -1 : 1);
}

export function getUserMap(users) {
    const userMap = {};
    for (const user of users) {
        userMap[user.id] = user;
    }
    return userMap;
}

export function orderAndGroupTickets(tickets, orderBy, groupBy) {
    if (orderBy === "priority") orderByPriority(tickets);
    else orderByTitle(tickets);

    return getGroupedTickets(tickets, groupBy);
}
