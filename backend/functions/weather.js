exports.handler = async () => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Weather fetch failed" })
    };
  }
};
