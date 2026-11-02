// Greedy Algorithms

// Activity Selection Problem
function activitySelection(activities) {
  activities.sort((a, b) => a.end - b.end);
  const selected = [activities[0]];
  
  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= selected[selected.length - 1].end) {
      selected.push(activities[i]);
    }
  }
  
  return selected;
}

// Fractional Knapsack
function fractionalKnapsack(items, capacity) {
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
  
  let totalValue = 0;
  let remainingCapacity = capacity;
  
  for (let item of items) {
    if (item.weight <= remainingCapacity) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      totalValue += (item.value / item.weight) * remainingCapacity;
      break;
    }
  }
  
  return totalValue;
}

// Test cases
console.log('=== GREEDY ===');
const activities = [
  { start: 1, end: 2 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 }
];
console.log('Activity Selection:', activitySelection(activities));

const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
console.log('Fractional Knapsack (capacity=50):', fractionalKnapsack(items, 50));
