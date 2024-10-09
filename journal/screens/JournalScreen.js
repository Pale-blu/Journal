import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getWeekDaysWithDates } from '../utils/getDates';

const JournalScreen = () => {
    const weekDays = getWeekDaysWithDates('short');  // Use short day names

    return (
        <View style={styles.container}>
            {/* Navbar */}
            <View style={styles.navbar}>
                <Text style={styles.title}>Journal</Text>
                <Text style={styles.icon}>📅</Text>
            </View>

            {/* Scheduler without side swipe */}
            <View style={styles.scheduler}>
                {weekDays.map((day, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dayCard,
                            day.isToday ? styles.todayCard : null,
                        ]}
                    >
                        <Text style={day.isToday ? styles.todayText : styles.dayText}>{day.day}</Text>
                        <Text style={day.isToday ? styles.todayText : styles.dateText}>{day.date}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',  // Dark background
    },
    navbar: {
        height: 60,
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
    icon: {
        fontSize: 24,
        color: '#fff',
    },
    scheduler: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 20,
    },
    dayCard: {
        width: '13%',  // Ensure 7 cards fit on the screen
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#444',
        alignItems: 'center',
    },
    todayCard: {
        borderColor: '#fff',
        borderWidth: 2,
    },
    dayText: {
        color: '#aaa',
        fontSize: 16,
    },
    dateText: {
        color: '#ccc',
        fontSize: 14,
    },
    todayText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default JournalScreen;
