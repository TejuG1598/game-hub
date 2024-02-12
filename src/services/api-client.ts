import axios from "axios";

// Define your API key here, which could be imported from a secure location or environment variable
const API_KEY = "9a2f91c9a8ff4271b00d5068bdbc47b0";

// Create an axios instance with the base URL
export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  // The params object here will include the API key in every request this axios instance makes
  params: {
    key: API_KEY
  },
});

