function generateMockData(size: number): string[] {
  const mockData: string[] = [];

  for (let i = 0; i < size; i++) {
    mockData.push(`Item ${Math.random().toString(36).substring(2, 15)}`);
  }

  return mockData;
}

export const largeData = generateMockData(20000);
