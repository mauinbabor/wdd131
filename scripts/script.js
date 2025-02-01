// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Set footer information
    const currentYearEl = document.getElementById("currentYear");
    const lastModifiedEl = document.getElementById("lastModified");
    currentYearEl.textContent = new Date().getFullYear();
    lastModifiedEl.textContent = document.lastModified;
  
    // Static weather values (for metric units)
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
  
    // Calculate wind chill if conditions are met
    const windChillEl = document.getElementById("windChill");
    // Conditions for a valid wind chill calculation (metric):
    // Temperature <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
      windChillEl.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
    } else {
      windChillEl.textContent = "N/A";
    }
  });
  
  /**
   * Calculates the wind chill factor for metric units.
   * Formula (one-liner):
   * wind chill (°C) = 13.12 + 0.6215 * T - 11.37 * (v ** 0.16) + 0.3965 * T * (v ** 0.16)
   *
   * @param {number} T - Temperature in °C
   * @param {number} v - Wind speed in km/h
   * @returns {number} - The calculated wind chill factor in °C
   */
  function calculateWindChill(T, v) {
    return 13.12 + 0.6215 * T - 11.37 * Math.pow(v, 0.16) + 0.3965 * T * Math.pow(v, 0.16);
  }
  
