// advancedDemo.test.js
const { fetchData, sumArray } = require('./Demo2');

// Mocking fetch API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: [1, 2, 3] }),
    })
);

describe('Kiểm thử với Jest', () => {
    test('Lấy dữ liệu từ API', async () => {
        const data = await fetchData('https://api.example.com/data');
        expect(data).toEqual({ data: [1, 2, 3] });
        expect(fetch).toHaveBeenCalledWith('https://api.example.com/data');
    });

    test('Tính tổng của mảng số', () => {
        expect(sumArray([1, 2, 3, 4])).toBe(10);
    });

    test('Snapshot testing', () => {
        const obj = { name: 'John', age: 30 };
        expect(obj).toMatchSnapshot();
    });
});