import { FlatList, StyleSheet } from 'react-native';
import CarouselItem from './CarouselItem';

const data = [
    { id: '1', title: 'Item A' },
    { id: '2', title: 'Item B' },
    { id: '3', title: 'Item C' },
];

export default function Carousel() {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <CarouselItem title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
        />
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        paddingHorizontal: 10,
    },
});