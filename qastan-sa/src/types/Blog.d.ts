interface TabProps {
  tabId: string;
  activeTab: string;
  onClick: (tabId: string) => void;
  children: React.ReactNode;
}

// cards with image (toepassingen)
interface CardProps {
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
}
// Hero op detail page
interface HeroWTextProps {
  badgeText: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
}

// title detail page
interface TitleProps {
  title: string;
  description: string;
}

// card with symbol
interface CardWSymbolProps {
  title: string;
  description: string;
  icon: string;
}

// banner detail page

interface Banner {
  title: string;
  description: string;
  buttonText: string;
}
