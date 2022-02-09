import { apiFetch } from "../helpers/apiFetch";

export const searchItems = async (query) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    return apiFetch(url, "GET");
}

export const getItem = async (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`;
    return apiFetch(url, "GET");
}

export const getDetailItem = async (id) => {
    const url = `https://api.mercadolibre.com/items/${id}/description`;
    return apiFetch(url, "GET");
}