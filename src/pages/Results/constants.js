import {
  BadgeDollarSign,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Info,
  Leaf,
  Percent,
  RefreshCcw,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sprout,
  Target,
  TrendingUp,
  Wallet
} from "lucide-react";
import { formatCurrency, formatNumber } from "../../utils/financialCalculations.js";

export const resultsIcons = {
  barChart: BarChart3,
  calendar: CalendarDays,
  cart: ShoppingCart,
  check: CheckCircle2,
  clipboard: ClipboardCheck,
  info: Info,
  leaf: Leaf,
  money: BadgeDollarSign,
  percent: Percent,
  refresh: RefreshCcw,
  scale: Scale,
  shield: ShieldCheck,
  sprout: Sprout,
  target: Target,
  trending: TrendingUp,
  wallet: Wallet
};

export const outputTones = {
  blue: "bg-sky-100 text-sky-700",
  green: "bg-agro-100 text-agro-700",
  orange: "bg-orange-100 text-orange-700",
  violet: "bg-violet-100 text-violet-700"
};

export const metricTones = {
  blue: "bg-sky-50 text-sky-700",
  green: "bg-agro-50 text-agro-800",
  orange: "bg-orange-50 text-orange-700"
};

export const baselineValues = {
  benefitCostRatio: formatNumber(1.57, { maximumFractionDigits: 2 }),
  costs: formatCurrency(6727800),
  income: formatCurrency(12600000),
  internalRate: "112,54 %",
  netPresentValue: formatCurrency(19073302),
  utility: formatCurrency(5872200)
};
