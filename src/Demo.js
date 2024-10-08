
function createUser(name, age) {
    return { name, age };
}

function isAdult(user) {
    return user.age >= 18;
}

function filterAdults(users) {
    return users.filter(isAdult);
}

module.exports = {
    createUser,
    isAdult,
    filterAdults,
};