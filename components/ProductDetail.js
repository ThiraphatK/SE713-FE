const productDetail = {
    template: `
        <div class="product-info">
            <a :href="linkCamtCmu">{{title}}</a>
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="item in details">{{item}}</li>
            </ul>
            <div v-for="(object, index) in variant" :key="object.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: object.color}">{{object.color}}</div>
            <div v-for="object in sizes" :key="object.id">{{object.size}}</div>
            <button class="button" :disabled="!inStock" :class="{disabledButton: !inStock}" @click="addToCart">Add To Cart</button>
            <p>{{inStock}}</p>
            <button class="button" @click="updateInStock">In Stock button</button>
            <p>Shipping: {{shipping}}</p>
        </div>`,
    props:{
        premium: Boolean,
    },
    setup(props){
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

            const inStock = computed(() => {
                return variant.value[selectedVariant.value].quantity;
            });

            const shipping = computed(() => {
                return props.premium? 'Free' : 30;
            });
            
            return {
                title,
                description, 
                linkCamtCmu, 
                inStock,
                inventory,
                details,
                variant,
                sizes,
                cart,
                addToCart,
                updateInStock,
                updateVariant,
                shipping
            }
        }
};