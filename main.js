const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        const cart = ref(0);
        const premium = ref(false);
        const variant = ref([
            {id: 2234, color: 'green', image: './assets/image/socks_green.jpg', quantity: 50, onSale: true},
            {id: 2235, color: 'blue', image: './assets/image/socks_blue.jpg', quantity: 0, onSale: false}
        ]);
        return {
            cart,
            premium,
            variant
        }
    }
});

app.component('product-display', productDisplay);
app.component('product-detail', productDetail);
app.mount('#app');