import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notes = [
    { id: '1', title: 'First Note' },
    { id: '2', title: 'Second Note' },
    // Add more notes here
];

export default function NotesScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Text style={styles.note} onPress={() => navigation.navigate('NoteDetail', { noteId: item.id })}>
            {item.title}
        </Text>
    );

    return (
        <View style={styles.container}>
            <FlatList data={notes} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    note: {
        padding: 20,
        fontSize: 18,
        color: 'white',
        borderBottomColor: '#444',
        borderBottomWidth: 1,
    },
});
