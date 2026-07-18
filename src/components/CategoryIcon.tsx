import {
  AlignVerticalJustifyCenter,
  Bolt,
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
  Zap,
  Wrench,
  PaintRoller,
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
