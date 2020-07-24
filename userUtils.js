export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed: {},
    };
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

export function getUser() {
    const rawUser = localStorage.getItem('USER');
    const user = JSON.parse(rawUser);
    
    return user;
}
