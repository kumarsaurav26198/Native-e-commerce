import { StyleSheet, FlatList, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/ProductsService';
import { Product } from '../components/Product';


export default function ProductContainer({ navigation }) {
    function renderProduct({ item: product }) {
        return (
            <Product
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {
                        productId: product.id,
                    });
                }}
            />
        );
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    });

    return (
        <View style={styles.productContainer}>
            <FlatList
                style={styles.productsList}
                contentContainerStyle={styles.productsListContainer}
                keyExtractor={(item) => item.id.toString()}
                data={products}
                renderItem={renderProduct}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 0.5,
    },

    productsList: {
        backgroundColor: '#eeeeee',
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginHorizontal: 8,
        marginVertical: 8,
    },
});