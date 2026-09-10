import { dashboardData, ordersData,rolesData, productsData, profileData, settingsData, usersData } from "../data/dummyData";

const delay = (ms=500) => {
    return new Promise((resolve) => setTimeout(resolve,ms));
};

//Dashboard API
const getDashboard = async () => {
    await delay();
    return dashboardData;
}

//User API
const getUsers = async () => {
    await delay();
    return usersData.items;
}

//Product API
const getProducts = async () => {
    await delay();
    return productsData.items;
}

//Order API
const getOrders = async () => {
    await delay();
    return ordersData.items;
}

//Settings API
const getSettings = async () => {
    await delay();
    return settingsData;
}

//Profile API
const getProfile = async () => {
    await delay();
    return profileData;
}

//Roles API
const getRoles = async () => {
    await delay();
    return rolesData.items;
}

export const api = {
    getDashboard,
    getUsers,
    getProducts,
    getOrders,
    getSettings,
    getProfile,
    getRoles
}