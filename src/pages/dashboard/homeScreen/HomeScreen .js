import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import SearchInput from '../../../components/common/SearchInput';
import BannerContainer from '../../../container/BannerContainer';
import ProductContainer from '../../../container/ProductContainer';
import FavouriteContainer from '../../../container/FavouriteContainer';
import CustomText from '../../../components/common/CustomText';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, overflow: 'hidden' }}>
            <ScrollView>
                <View>
                    <SearchInput />
                </View>
                <View>
                    <CustomText text="Banner Products" />
                    <BannerContainer />
                </View>
                <View>
                    <CustomText text="Favourite Products" />
                    <FavouriteContainer />
                </View>
                <View>
                    <CustomText text="All Products" />
                    <ProductContainer />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
