import React from "react";

export const apiFetch = async (url, method, body, headers) => {
    try {
      const resp = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
      });
  
      if (resp.ok) {
        return await resp.json();
      } else {
        throw await resp.json();
      }
    } catch (error) {
      throw error;
    }
  };