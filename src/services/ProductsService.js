const PRODUCTS = [
    {
        id: 104,
        name: 'Tera Shoes',
        price: 2,
        image: require('../assets/products/puma.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/car-101.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },

    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 20,
        image: require('../assets/products/cake-102.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 107,
        name: 'SweetHome laptops',
        price: 60000,
        image: require('../assets/products/laptops.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 6000000,
        image: require('../assets/products/puma.jpg'),

        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

