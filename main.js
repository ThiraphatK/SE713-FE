const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const product = ref('Boots');
        const band = ref('SE 331');
        const description = ref('A pair of warm, fuzzy boots');
        const linkCamtCmu = ref('https://www.camt.cmu.ac.th/');
        const inventory = ref(9);
        const details= ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ]);
        const variant = ref([
            {id: 2234, color: 'green', image: './assets/image/socks_green.jpg', quantity: 50, onSale: true},
            {id: 2235, color: 'blue', image: './assets/image/socks_blue.jpg', quantity: 0, onSale: false}
        ]);

        const selectedVariant = ref(0);

        const sizes = ref([
            {id: 1, size: 'S'},
            {id: 2, size: 'M'},
            {id: 3, size: 'L'}
        ]);

        const cart = ref(0);

        function addToCart() {
            cart.value += 1;
        }

        function updateImage(variantImage) {
            image.value = variantImage;
        }

        function updateInStock() {
            inStock.value = ref(true);
        }

        const onSale = computed(() => {
            return variant.value[selectedVariant.value].onSale? 'On Sale!' : 'Not On Sale';
        });

        const title = computed(()=> {
            return band.value + ' ' + product.value + ' is '+ onSale.value;
        });

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const image = computed(() => {
            return variant.value[selectedVariant.value].image;
        });

        const inStock = computed(() => {
            return variant.value[selectedVariant.value].quantity;
        });

        return {
            title,
            description, 
            image, 
            linkCamtCmu, 
            inStock,
            inventory,
            details,
            variant,
            sizes,
            cart,
            addToCart,
            updateImage,
            updateInStock,
            updateVariant
        }
    }
}).mount('#app');