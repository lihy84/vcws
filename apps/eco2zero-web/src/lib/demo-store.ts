export type ActionLog = {
  id: string;
  actionId: string;
  title: string;
  points: number;
  co2: number;
  waste: number;
  completedAt: string;
};

export type Redemption = {
  id: string;
  rewardId: string;
  title: string;
  points: number;
  redeemedAt: string;
};

export type DemoState = {
  name: string;
  school: string;
  joinedAt: string;
  logs: ActionLog[];
  redemptions: Redemption[];
};

export const demoActions = [
  { id: "cup", icon: "☕", title: "Used a reusable cup", category: "Waste", points: 15, co2: 0.08, waste: 0.03 },
  { id: "bag", icon: "♻", title: "Brought reusable bags", category: "Waste", points: 10, co2: 0.04, waste: 0.02 },
  { id: "walk", icon: "◉", title: "Walked instead of driving", category: "Transport", points: 30, co2: 1.2, waste: 0 },
  { id: "cycle", icon: "◇", title: "Cycled instead of driving", category: "Transport", points: 35, co2: 1.5, waste: 0 },
  { id: "sort", icon: "↻", title: "Sorted recycling correctly", category: "Waste", points: 15, co2: 0.12, waste: 0.4 },
  { id: "food", icon: "✦", title: "Prevented food waste", category: "Food", points: 25, co2: 0.7, waste: 0.35 },
  { id: "energy", icon: "ϟ", title: "Saved household energy", category: "Energy", points: 20, co2: 0.5, waste: 0 },
  { id: "cleanup", icon: "◎", title: "Joined a community cleanup", category: "Community", points: 100, co2: 0.4, waste: 3 },
];

export const demoRewards = [
  { id: "coffee", icon: "☕", title: "$2 local coffee coupon", partner: "Community café", points: 150 },
  { id: "fitness", icon: "△", title: "Drop-in fitness pass", partner: "Local recreation partner", points: 300 },
  { id: "market", icon: "◫", title: "$5 market credit", partner: "Neighbourhood market", points: 450 },
  { id: "event", icon: "✦", title: "Eco workshop ticket", partner: "Eco2Zero", points: 600 },
];

const storageKey = "eco2zero-demo-v1";
const storeEvent = "eco2zero-demo-change";
const emptyState: DemoState = { name: "", school: "", joinedAt: "", logs: [], redemptions: [] };
export const emptyStateJson = JSON.stringify(emptyState);

export function getDemoSnapshot() {
  return window.localStorage.getItem(storageKey) ?? emptyStateJson;
}

export function subscribeToDemoStore(onChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey) onChange();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(storeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(storeEvent, onChange);
  };
}

export function updateDemoStore(update: (current: DemoState) => DemoState) {
  const current = JSON.parse(getDemoSnapshot()) as DemoState;
  window.localStorage.setItem(storageKey, JSON.stringify(update(current)));
  window.dispatchEvent(new Event(storeEvent));
}

export function resetDemoStore() {
  window.localStorage.removeItem(storageKey);
  window.dispatchEvent(new Event(storeEvent));
}
