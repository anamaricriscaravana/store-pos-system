// export const getRandomBG = () => {
//     const colors = [
//         "#f6b100",
//         "#2e4a40",
//         "#664a04",
//         "#f5f5f5",
//         "#ababab",
//         "#1f1f1f",
//         "#383838",
//         "#262626",
//     ];
//     const color = colors[Math.floor(Math.random() * colors.length)];
//     return "bg-[" + color + "]"; 
// } 

export const getRandomBG = () => {
    const colors = [
        "#f6b100",
        "#2e4a40",
        "#664a04",
        // "#f5f5f5",
        // "#ababab",
        // "#1f1f1f",
        // "#383838",
        // "#262626",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return { backgroundColor: color };
}