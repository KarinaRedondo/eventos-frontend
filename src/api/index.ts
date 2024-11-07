import axios from "axios"; // importo la libreria o dependencia de axios

export const urlApi= axios.create({baseURL: "http://localhost:8080/api/v1"})