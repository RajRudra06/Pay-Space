import { Txn_channel } from "@repo/db_banks/src/generated/prisma/client";

export function ProcessTime(transferMethod: Txn_channel) {
    if (transferMethod === 'IMPS') {
        // Random delay between 2–15 seconds
        return new Date(
            Date.now() + Math.floor(Math.random() * (15000 - 2000 + 1)) + 2000
        );
    }

    else if (transferMethod === "NEFT") {
        // Hourly batch settlement
        const now = new Date();
        const batchHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        const nextBatchHour = batchHours.find(h => h > now.getHours());

        if (!nextBatchHour) {
            // next day first batch
            const next = new Date(now);
            next.setDate(next.getDate() + 1);
            // @ts-ignore
            next.setHours(batchHours[0], 0, 0, 0);
            return next;
        }

        const next = new Date(now);
        next.setHours(nextBatchHour, 0, 0, 0);
        return next;
    }

    else if (transferMethod === "RTGS") {
        // Real-world RTGS working hours
        const now = new Date();
        const startHour = 9;
        const endHour = 16; // last batch start time 4 PM

        if (now.getHours() < startHour) {
            // Before start: set to today's 9 AM
            const start = new Date(now);
            start.setHours(startHour, 0, 0, 0);
            return start;
        } 
        else if (now.getHours() >= endHour) {
            // After end: set to tomorrow's 9 AM
            const nextDay = new Date(now);
            nextDay.setDate(nextDay.getDate() + 1);
            nextDay.setHours(startHour, 0, 0, 0);
            return nextDay;
        } 
        else {
            return new Date(Date.now() + Math.floor(Math.random() * 5000) + 1000);
        }
    }
}
