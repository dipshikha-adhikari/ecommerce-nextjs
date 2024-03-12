export const getCategories = async () => {
    try {
        const result = await fetch(`http://localhost:3000/api/products/categories`);
        const jsonData = await result.json();
        return jsonData;
    } catch (err) {
        console.log(err)
    }
}