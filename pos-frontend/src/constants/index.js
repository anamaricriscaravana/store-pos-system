import cokeMismo from '../assets/images/cokeMismo.jpg';
import cokeKasalo from '../assets/images/cokeKasalo.jpg';
import cheezy from '../assets/images/cheezy.jpg';
import martys from '../assets/images/martys.jpg';
import kopikoBrown from '../assets/images/kopikoBrown.jpg';
import nescafe from '../assets/images/nescafe.jpg';
import headNShoulders from '../assets/images/headNShoulders.jpg';
import doveShampoo from '../assets/images/doveShampoo.jpg';
import arielPowder from '../assets/images/arielPowder.jpg';
import downy from '../assets/images/downy.jpg';

export const popularItems = [
    {
        id: 1,
        image: cokeMismo,
        name: 'Coke Mismo',
        numberOfOrders: 300,
    },
    {
        id: 2,
        image: cokeKasalo,
        name: 'Coke Kasalo',
        numberOfOrders: 300,
    },
    {
        id: 3,
        image: cheezy,
        name: 'Cheezy',
        numberOfOrders: 280,
    },
    {
        id: 4,
        image: martys,
        name: 'Martys',
        numberOfOrders: 260,
    },
    {
        id: 5,
        image: kopikoBrown,
        name: 'Kopiko Brown',
        numberOfOrders: 260,
    },
    {
        id: 6,
        image: nescafe,
        name: 'Nescafe',
        numberOfOrders: 255,
    },
    {
        id: 7,
        image: headNShoulders,
        name: 'Head and Shoulders',
        numberOfOrders: 250,
    },
    {
        id: 8,
        image: doveShampoo,
        name: 'Dove Shampoo',
        numberOfOrders: 180,
    },
    {
        id: 9,
        image: arielPowder,
        name: 'Ariel Powder',
        numberOfOrders: 160,
    },
    {
        id: 10,
        image: downy,
        name: 'Downy',
        numberOfOrders: 150,
    },
]

export const inventory = [
    { id: 1, name: "Store", status: "Available", initial: "ST" }, //change next time
    // { id: 1, name: "Canned Goods", status: "Low", initial: "SF" },
    // { id: 2, name: "Noodles", status: "High", initial: "BC" },
]

export const cannedGoods = [
    { id: 1, name: "Canned Beans", price: "20", category: "Canned Goods" },
    { id: 2, name: "Canned Corn", price: "35", category: "Canned Goods" },
    { id: 3, name: "Canned Tuna", price: "50", category: "Canned Goods" },
    { id: 4, name: "Canned Sardines", price: "30", category: "Canned Goods" },
];

export const noodles = [
    { id: 1, name: "Instant Noodles", price: "17", category: "Noodles" },
    { id: 2, name: "Cup Noodles", price: "30", category: "Noodles" }
];
export const snacks = [
    { id: 1, name: "Potato Chips", price: "9", category: "Snacks" },
    { id: 2, name: "Chocolate Bar", price: "15", category: "Snacks" }
];
export const beverages = [
    { id: 1, name: "Bottled Water", price: "20", category: "Beverages" },
    { id: 2, name: "Coke", price: "20", category: "Beverages" }
];
export const personalCare = [
    { id: 1, name: "Toothpaste", price: "10", category: "Personal Care" },
    { id: 2, name: "Shampoo", price: "8", category: "Personal Care" }
];
export const condiments = [
    { id: 1, name: "Ketchup", price: "15", category: "Condiments" },
    { id: 2, name: "Soy Sauce", price: "15", category: "Condiments" }
];

export const sariSariPacks = [
    { id: 1, name: "Sugar Pack", price: "25", category: "Sari-Sari" },
    { id: 2, name: "Coffee Pack", price: "15", category: "Sari-Sari" }
];

export const householdItems = [
    { id: 1, name: "Dish Soap", price: "15", category: "Household" },
    { id: 2, name: "Laundry Detergent", price: "20", category: "Household" }
];

export const frozenGoods = [
    { id: 1, name: "Hotdogs", price: "15", category: "Frozen" },
    { id: 2, name: "Longganisa", price: "50", category: "Frozen" }
];

export const riceGrains = [
    { id: 1, name: "White Rice", price: "60", category: "Grains" },
{ id: 2, name: "Brown Rice", price: "60", category: "Grains" }
];

export const schoolSupplies = [
    { id: 1, name: "Notebooks", price: "20", category: "Stationery" },
{ id: 2, name: "Pens", price: "5", category: "Stationery" }
];

export const eggsDairy = [
    { id: 1, name: "Eggs", price: "10", category: "Dairy" },
{ id: 2, name: "Milk", price: "13", category: "Dairy" }
];

export const products = [ //paltan ko pa
    { id: 1, name: "Canned Goods", bgColor: "#5b45b0", icon: "🥫", items: cannedGoods },
    { id: 2, name: "Noodles", bgColor: "#7f167f", icon: "🍜", items: noodles },
    { id: 3, name: "Snacks", bgColor: "#735f32", icon: "🍪", items: snacks },
    { id: 4, name: "Beverages", bgColor: "#1d2569", icon: "🥤", items: beverages },
    { id: 5, name: "Personal Care", bgColor: "#285430", icon: "🧼", items: personalCare },
    { id: 6, name: "Condiments", bgColor: "#5b45b0", icon: "🧴", items: condiments },
    { id: 7, name: "Sari-Sari Packs", bgColor: "#7f167f", icon: "🛍️", items: sariSariPacks }, // e.g., sugar, coffee, shampoo in sachets
    { id: 8, name: "Household Items", bgColor: "#735f32", icon: "🧽", items: householdItems },
    { id: 9, name: "Frozen Goods", bgColor: "#1d2569", icon: "🧊", items: frozenGoods }, // e.g. hotdogs, longganisa
    { id: 10, name: "Grains", bgColor: "#285430", icon: "🍚", items: riceGrains },
    { id: 11, name: "School Supplies", bgColor: "#5b45b0", icon: "📚", items: schoolSupplies },
    { id: 12, name: "Eggs & Dairy", bgColor: "#7f167f", icon: "🥚", items: eggsDairy }
];