export function getIncomePoints(income: number): number {
    return (
      [
        { min: 100000, max: Infinity, points: 0 },
        { min: 50000,  max: 99999,   points: 5 },
        { min: 20000,  max: 49999,   points: 10 },
        { min: 0,      max: 19999,   points: 20 },
      ].find(range => income >= range.min && income <= range.max)?.points ?? 0
    );
  }

  export function getTypePoints(type: string): number {
    const typePoints: Record<string, number> = {
      SALARIED: 0,
      GOVT_PSU: 0,
      SELF_EMPLOYED: 10,
      STUDENT: 20,
      UNEMPLOYED: 30,
      RETIRED: 10
    };
  
    return typePoints[type] ?? 0;
  }

  export function getDTIPoints(dti: number): number {
    return (
      [
        { max: 0.2, points: 0 },
        { max: 0.4, points: 10 },
        { max: 0.6, points: 20 },
        { max: Infinity, points: 40 }
      ].find(range => dti < range.max)?.points ?? 0
    );
  }