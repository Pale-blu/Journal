import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import DayCard from '../components/DayCard';
import { getWeekDaysWithDates } from '../utils/getDates'; // utility function to get dates

export default function JournalScreen() {
    const weekDays = getWeekDaysWithDates(); // Get an array of days with dates

    return (
        <View style={styles.container}>
            <Header title="Journal" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
                {weekDays.map((day, index) => (
                    <DayCard key={index} day={day.day} date={day.date} isToday={day.isToday} />
                ))}
            </ScrollView>
            {/* Below you can add more content specific to the journal page */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    daysContainer: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
});
