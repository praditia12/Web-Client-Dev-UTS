function dateDifferenceTS(date1 : string, date2 : string): number {
    const d1: Date = new Date(date1);
    const d2: Date = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    return diffTime / (1000 * 60 * 60 * 24);
}

console.log(dateDifferenceTS("2025-05-7", "2025-05-9")); 
