// ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

// Mai's Note:
// °C = (°F - 32) * 0.556

let temp = (farenheit) => {
  let celsius = (farenheit - 32) * 0.556;
  celsius = celsius.toFixed(1);
  console.log(`${farenheit}°F is ${celsius}°C`);
};

temp(50); // 50°F is 10.0°C
temp(85); // 85°F is 29.5°C
temp(87); // 87°F is 30.6°C
temp(-50); // -50°F is -45.6°C
