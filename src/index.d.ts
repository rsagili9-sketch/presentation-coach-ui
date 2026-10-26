import type { ReactNode, ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'text'; }
export interface NoticeProps { lead: string; children: ReactNode; }
export interface SessionTimerProps { elapsed: number; targetMin?: number; targetMax?: number; trackMax?: number; }
export interface RubricValue { name: string; description: string; maxPoints: number | string | null; }
export interface RubricRowProps { value: RubricValue; onChange?: (v: RubricValue) => void; onRemove?: () => void; }
export interface CriterionCardProps { name: string; earned: number | null; max: number; explanation: string; quote?: { time: string; text: string }; assessable?: boolean; }
export interface MetricProps { label: string; value: string | number | null; }
export interface DeltaRowProps { label: string; from: string | number | null; to: string | number | null; unit?: string; change: string; better: boolean; }
export interface CompareChartProps { labels?: [string, string]; criteria: { name: string; a: number | null; b: number | null; max: number }[]; }
export interface TakeRowProps { name: string; date: string; rubric: string | null; duration: string; score: number | null; max: number; selected?: boolean; onSelect?: () => void; onOpen?: () => void; }
