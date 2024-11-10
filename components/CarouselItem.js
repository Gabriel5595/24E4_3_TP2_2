import { View, Text, StyleSheet } from 'react-native';

export default function CarouselItem({ title }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
