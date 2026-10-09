import {
  AlignVerticalJustifyCenter,
  BatteryCharging,
  BatteryFull,
  Bolt,
  Drill,
  Hammer,
  Layers,
  LayoutPanelLeft,
  PaintRoller,
  Package,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bolt,
  AlignVerticalJustifyCenter,
  LayoutPanelLeft,
  Layers,
  Package,
  BatteryCharging,
  BatteryFull,
  Zap,
  Drill,
  Wrench,
  PaintRoller,
  Hammer,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Package;
  return <Icon className={className} aria-hidden />;
}
