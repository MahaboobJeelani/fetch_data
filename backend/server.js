const axios = require('axios');
const fs = require('fs').promises;

const fetchData = async () => {

    try {
        const [responseA, responseB] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/todos`),
            axios.get(`https://fakestoreapi.com/products`)
        ]);

        const combinedData = {
            dataA: responseA.data,
            dataB: responseB.data
        };

        fs.writeFile('combinedData.json', JSON.stringify(combinedData, null, 2), 'utf-8');

    } catch (error) {
        console.error('Error fetching data from APIs or writing to file:', error.message);
    }
};

fetchData();
