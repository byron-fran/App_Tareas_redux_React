export const generarId = () => {
    const id = Date.now().toString(16) + Math.random().toString(16).substring(2);
    return id
}