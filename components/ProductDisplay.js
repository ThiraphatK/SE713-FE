const productDisplay = {
    template:
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="" :class="{outOfStockImage: !inStock}">
                </div>
            </div>
        </div>`,
        setup() {
            const variant = ref([
                {id: 2234, color: 'green', image: '../assets/image/socks_green.jpg', quantity: 50, onSale: true},
                {id: 2235, color: 'blue', image: '../assets/image/socks_blue.jpg', quantity: 0, onSale: false}
            ]);
            const selectedVariant = ref(0);
            const image = computed(() => {
                return variant.value[selectedVariant.value].image;
            });
            const inStock = computed(() => {
                return variant.value[selectedVariant.value].quantity;
            });
            return {
                image,
                inStock,
            }
        }
}