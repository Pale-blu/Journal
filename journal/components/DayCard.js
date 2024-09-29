import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DayCard({ day, date, isToday }) {
    return (
        <View style={[styles.card, isToday && styles.today]}>
            <Text style={[styles.day, isToday && styles.bold]}>{day}</Text>
            <Text style={[styles.date, isToday && styles.bold]}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    today: {
        borderColor: '#FF9800',
        borderWidth: 2,
    },
    day: {
        color: 'white',
        fontSize: 16,
    },
    date: {
        color: 'white',
        fontSize: 14,
    },
    bold: {
        fontWeight: 'bold',
    },
});
