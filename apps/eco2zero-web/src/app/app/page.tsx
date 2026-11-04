"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import {
  demoActions,
  demoRewards,
  emptyStateJson,
  getDemoSnapshot,
  resetDemoStore,
  subscribeToDemoStore,
  updateDemoStore,
  type DemoState,
} from "@/lib/demo-store";

type View = "home" | "actions" | "rewards" | "profile";

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-CA", { maximumFractionDigits: 2 }).format(value);
}

export default function DemoAppPage() {
  const hydrated = useSyncExternalStore(() => () => undefined, () => true, () => false);
  const rawState = useSyncExternalStore(subscribeToDemoStore, getDemoSnapshot, () => emptyStateJson);
  const state = useMemo(() => JSON.parse(rawState) as DemoState, [rawState]);
  const [view, setView] = useState<View>("home");
  const [category, setCategory] = useState("All");
  const [notice, setNotice] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");

  const earned = state.logs.reduce((sum, log) => sum + log.points, 0);
  const spent = state.redemptions.reduce((sum, redemption) => sum + redemption.points, 0);
  const balance = earned - spent;
  const co2 = state.logs.reduce((sum, log) => sum + log.co2, 0);
  const waste = state.logs.reduce((sum, log) => sum + log.waste, 0);
  const today = new Date().toISOString().slice(0, 10);
  const todayLogs = state.logs.filter((log) => log.completedAt.slice(0, 10) === today);
  const uniqueDays = new Set(state.logs.map((log) => log.completedAt.slice(0, 10))).size;
  const level = Math.floor(earned / 250) + 1;
  const levelProgress = earned % 250;

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const completeAction = (actionId: string) => {
    const action = demoActions.find((item) => item.id === actionId);
    if (!action) return;
    updateDemoStore((current) => ({
      ...current,
      logs: [{ id: crypto.randomUUID(), actionId: action.id, title: action.title, points: action.points, co2: action.co2, waste: action.waste, completedAt: new Date().toISOString() }, ...current.logs],
    }));
    showNotice(`+${action.points} points · ${action.title}`);
  };

  const redeem = (rewardId: string) => {
    const reward = demoRewards.find((item) => item.id === rewardId);
    if (!reward || balance < reward.points) return;
    updateDemoStore((current) => ({
      ...current,
      redemptions: [{ id: crypto.randomUUID(), rewardId: reward.id, title: reward.title, points: reward.points, redeemedAt: new Date().toISOString() }, ...current.redemptions],
    }));
    showNotice(`Redeemed · ${reward.title}`);
  };

  const finishOnboarding = () => {
    if (!name.trim()) return;
    updateDemoStore((current) => ({ ...current, name: name.trim(), school: school.trim(), joinedAt: new Date().toISOString() }));
  };

  return <div className="demo-app">
    {hydrated && !state.name && <div className="onboarding-backdrop"><section className="onboarding-card"><span className="app-symbol">e²0</span><p className="app-kicker">Eco2Zero demo</p><h1>Small actions start here.</h1><p>Create a local demo profile. Your activity stays in this browser.</p><label>First name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Alex" autoFocus /></label><label>School or organization <span>Optional</span><input value={school} onChange={(event) => setSchool(event.target.value)} placeholder="Victoria community member" /></label><button className="app-primary" disabled={!name.trim()} onClick={finishOnboarding}>Start my journey →</button></section></div>}

    {notice && <div className="app-toast" role="status">{notice}</div>}
    <header className="app-header"><div><span className="app-symbol">e²0</span><span><strong>Eco2Zero</strong><small>DEMO APP</small></span></div><div className="app-balance"><small>Available</small><strong>{balance} pts</strong></div></header>

    <div className="app-layout">
      <aside className="app-sidebar"><nav>{([['home','Overview','⌂'],['actions','Log action','＋'],['rewards','Rewards','◇'],['profile','Profile','○']] as const).map(([id,label,icon]) => <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)}><span>{icon}</span>{label}</button>)}</nav><div className="app-sidebar-impact"><span>Community pulse</span><strong>12,486</strong><small>actions together</small></div></aside>

      <main className="app-main">
        {view === "home" && <>
          <section className="app-welcome"><div><p className="app-kicker">Welcome back</p><h1>{state.name}, your actions add up.</h1><p>Choose one useful thing today and watch it become part of something larger.</p></div><button className="app-primary" onClick={() => setView("actions")}>Log an eco action ＋</button></section>
          <section className="app-stat-row"><article><span>Eco Points</span><strong>{balance}</strong><small>{earned} earned all time</small></article><article><span>CO₂ reduced</span><strong>{formatNumber(co2)} kg</strong><small>Estimated impact</small></article><article><span>Waste diverted</span><strong>{formatNumber(waste)} kg</strong><small>Estimated impact</small></article><article><span>Action days</span><strong>{uniqueDays}</strong><small>{todayLogs.length} actions today</small></article></section>
          <section className="app-grid"><article className="app-panel"><div className="app-panel-head"><div><p className="app-kicker">Monthly challenge</p><h2>Everyday Action Streak</h2></div><span className="challenge-badge">+200 pts</span></div><p>Complete 12 eco actions this month.</p><div className="progress-track"><span style={{width:`${Math.min(100, state.logs.length / 12 * 100)}%`}} /></div><div className="progress-copy"><strong>{Math.min(state.logs.length,12)} / 12 actions</strong><span>{Math.max(0,12-state.logs.length)} to go</span></div></article><article className="app-panel level-panel"><span className="level-ring">{level}</span><div><p className="app-kicker">Eco level {level}</p><h2>{level < 3 ? "Habit Builder" : "Community Catalyst"}</h2><div className="progress-track"><span style={{width:`${levelProgress / 250 * 100}%`}} /></div><small>{250-levelProgress} points to level {level+1}</small></div></article></section>
          <section className="app-panel activity-panel"><div className="app-panel-head"><div><p className="app-kicker">Latest progress</p><h2>Recent activity</h2></div><button className="app-text-button" onClick={() => setView("actions")}>Add action →</button></div>{state.logs.length === 0 ? <div className="empty-state"><span>＋</span><h3>No actions yet</h3><p>Log your first eco action to start earning points.</p></div> : <div className="activity-list">{state.logs.slice(0,5).map((log) => <div key={log.id}><span className="activity-dot">✓</span><div><strong>{log.title}</strong><small>{new Date(log.completedAt).toLocaleString("en-CA",{dateStyle:"medium",timeStyle:"short"})}</small></div><b>+{log.points}</b></div>)}</div>}</section>
        </>}

        {view === "actions" && <><section className="app-page-title"><p className="app-kicker">Build your impact</p><h1>Log an eco action</h1><p>Choose what you completed. Estimates are illustrative for this demo.</p></section><div className="filter-row">{["All","Waste","Transport","Food","Energy","Community"].map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><section className="action-grid">{demoActions.filter((action) => category === "All" || action.category === category).map((action) => <article key={action.id}><span className="action-icon">{action.icon}</span><small>{action.category}</small><h2>{action.title}</h2><div><span><b>+{action.points}</b> points</span><span>{action.co2} kg CO₂</span></div><button onClick={() => completeAction(action.id)}>Complete action ＋</button></article>)}</section></>}

        {view === "rewards" && <><section className="app-page-title reward-title"><div><p className="app-kicker">Local rewards</p><h1>Use your Eco Points</h1><p>Demo rewards illustrate how participating businesses can support better habits.</p></div><div className="points-card"><small>Your balance</small><strong>{balance}</strong><span>Eco Points</span></div></section><section className="reward-grid">{demoRewards.map((reward) => <article key={reward.id}><span className="reward-icon">{reward.icon}</span><small>{reward.partner}</small><h2>{reward.title}</h2><strong>{reward.points} pts</strong><button disabled={balance < reward.points} onClick={() => redeem(reward.id)}>{balance >= reward.points ? "Redeem reward" : `${reward.points-balance} more points`}</button></article>)}</section>{state.redemptions.length > 0 && <section className="app-panel"><p className="app-kicker">Redemption history</p><div className="activity-list">{state.redemptions.map((item) => <div key={item.id}><span className="activity-dot">◇</span><div><strong>{item.title}</strong><small>{new Date(item.redeemedAt).toLocaleDateString("en-CA")}</small></div><b>-{item.points}</b></div>)}</div></section>}</>}

        {view === "profile" && <><section className="app-page-title"><p className="app-kicker">Your Eco2Zero profile</p><h1>{state.name}</h1><p>{state.school || "Victoria community member"}</p></section><section className="profile-grid"><article className="app-panel"><p className="app-kicker">Lifetime summary</p><dl><div><dt>Actions completed</dt><dd>{state.logs.length}</dd></div><div><dt>Points earned</dt><dd>{earned}</dd></div><div><dt>Rewards redeemed</dt><dd>{state.redemptions.length}</dd></div><div><dt>Member since</dt><dd>{state.joinedAt ? new Date(state.joinedAt).toLocaleDateString("en-CA",{month:"short",year:"numeric"}) : "Today"}</dd></div></dl></article><article className="app-panel"><p className="app-kicker">Demo controls</p><h2>Start fresh</h2><p>Clear this browser’s demo profile, actions, points, and rewards.</p><button className="danger-button" onClick={() => { resetDemoStore(); setView("home"); }}>Reset demo data</button></article></section></>}
      </main>
    </div>

    <nav className="app-mobile-nav">{([['home','Home','⌂'],['actions','Action','＋'],['rewards','Rewards','◇'],['profile','Profile','○']] as const).map(([id,label,icon]) => <button key={id} className={view === id ? "active" : ""} onClick={() => setView(id)}><span>{icon}</span>{label}</button>)}</nav>
  </div>;
}
