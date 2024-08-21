import { Fragment, ReactNode } from "react";

type MenuItem = {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  subItems?: MenuItem[];
};

type MenuSection = {
  label: string;
  items: MenuItem[];
};

type MenuProps = {
  sections: MenuSection[];
  className?: string;
  activeItemId?: string;
  onItemClick?: (item: MenuItem) => void;
  renderItem?: (item: MenuItem) => ReactNode;
  renderLabel?: (label: string) => ReactNode;
  isCompact?: boolean;
  isBoxed?: boolean;
};

export const Menu = ({
  sections,
  className = "",
  activeItemId,
  onItemClick,
  renderItem,
  renderLabel,
  isCompact = false,
  isBoxed = false,
}: MenuProps) => {
  const renderMenuItem = (
    item: MenuItem,
    index: number,
    level: number = 0,
  ): ReactNode => {
    const isActive = item.isActive || item.label === activeItemId;
    const hasSubItems = item.subItems && item.subItems.length > 0;

    const itemContent = renderItem ? (
      renderItem(item)
    ) : (
      <a
        href={item.href}
        className={isActive ? "is-active" : ""}
        onClick={(e) => {
          if (!item.href) e.preventDefault();
          item.onClick?.();
          onItemClick?.(item);
        }}
      >
        {item.label}
      </a>
    );

    return (
      <li key={`${level}-${index}`}>
        {itemContent}
        {hasSubItems && (
          <ul>
            {item.subItems!.map((subItem, subIndex) =>
              renderMenuItem(subItem, subIndex, level + 1),
            )}
          </ul>
        )}
      </li>
    );
  };

  const menuClasses = [
    "menu",
    className,
    isCompact ? "is-compact" : "",
    isBoxed ? "is-boxed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <aside className={menuClasses}>
      {sections.map((section, sectionIndex) => (
        <Fragment key={sectionIndex}>
          {renderLabel ? (
            renderLabel(section.label)
          ) : (
            <p className="menu-label">{section.label}</p>
          )}
          <ul className="menu-list">
            {section.items.map((item, itemIndex) =>
              renderMenuItem(item, itemIndex),
            )}
          </ul>
        </Fragment>
      ))}
    </aside>
  );
};
