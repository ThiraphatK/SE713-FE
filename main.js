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
        const details= ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variant = ref([
            {id: 2234, color: 'green'},
            {id: 2235, color: 'blue'}
        ]);

        const sizes = ref([
            {id: 1, size: 'S'},
            {id: 2, size: 'M'},
            {id: 3, size: 'L'}
        ]);

        return {
            product, 
            description, 
            image, 
            linkCamtCmu, 
            inStock,
            inventory,
            onSale,
            details,
            variant,
            sizes
        }
    }
}).mount('#app');