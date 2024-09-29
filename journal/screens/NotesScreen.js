import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function NotesScreen() {
    const [note, setNote] = useState('');
    const [notesList, setNotesList] = useState([]);

    const addNote = () => {
        if (note) {
            setNotesList([...notesList, { key: note }]);
            setNote('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Write your note here"
                placeholderTextColor="#8E8E8E"
                style={styles.input}
            />
            <Button title="Add Note" onPress={addNote} color="#1E90FF" />
            <FlatList
                data={notesList}
                renderItem={({ item }) => <Text style={styles.note}>{item.key}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: '#444444',
        borderWidth: 1,
        color: '#FFFFFF',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    note: {
        color: '#FFFFFF',
        fontSize: 16,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#444444',
    },
});
