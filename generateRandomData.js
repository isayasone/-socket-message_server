const generateRandomData = () => {
  const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
  return [
    { city: 'New York', temperature: Math.floor(Math.random() * 50), humidity: Math.floor(Math.random() * 100), condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)] },
    { city: 'Los Angeles', temperature: Math.floor(Math.random() * 50), humidity: Math.floor(Math.random() * 100),condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)] },
    { city: 'London', temperature: Math.floor(Math.random() * 50), humidity: Math.floor(Math.random() * 100), condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)] },
    { city: 'Tokyo', temperature: Math.floor(Math.random() * 50), humidity: Math.floor(Math.random() * 100), condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)] },
    { city: 'Sydney', temperature: Math.floor(Math.random() * 50), humidity: Math.floor(Math.random() * 100), condition: weatherConditions[Math.floor(Math.random() * weatherConditions.length)] }
  ];
};
module.exports = generateRandomData;
