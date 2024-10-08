const { createUser, isAdult, filterAdults } = require('./Demo.js');
    test('Tao doi tuong nguoi dung', () => {
        const user = createUser('John', 25);
        expect(user).toEqual({ name: 'John', age: 25 });
    });

    test('Kiem tra ngươi dung truong thanh', () => {
        const user = createUser('Jane', 17);
        expect(isAdult(user)).toBe(false);
    });

    test('Loc nguoi dung truong thanh', () => {
        const users = [
            createUser('Alice', 22),
            createUser('Bob', 15),
            createUser('Charlie', 30)
        ];
        expect(filterAdults(users)).toEqual([
            { name: 'Alice', age: 22 },
            { name: 'Charlie', age: 30 }
        ]);
    });