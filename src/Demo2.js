// advancedDemo.js

// Hàm lấy dữ liệu từ API giả lập
async function fetchData(apiUrl) {
    const response = await fetch(apiUrl);
    return response.json();
}

// Hàm tính tổng của một mảng số
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

// Xuất khẩu các hàm để sử dụng trong kiểm thử
module.exports = {
    fetchData,
    sumArray,
};