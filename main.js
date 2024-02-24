const { createApp, ref } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const description = ref('A pair of warm, fuzzy boots');
        const image = ref('./assets/image/socks_green.jpg');
        const linkCamtCmu = ref('https://www.camt.cmu.ac.th/');
        const inStock = ref(true);
        const inventory = ref(9);
        const onSale = ref(true);
        return {
            product, 
            description, 
            image, 
            linkCamtCmu, 
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app');