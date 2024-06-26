interface TabProps {
  tabId: string;
  activeTab: string;
  onClick: (tabId: string) => void;
  children: React.ReactNode;
}

// cards with image (toepassingen)
interface CardProps {
  id: string; 
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

// Hero op detail page
interface HeroWTextProps {
  badgeText: string;
  heading: string;
  paragraph: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
}

// title detail page
interface TitleProps {
  title?: string;
  description?: string;
}

// card with symbol
interface CardWSymbolProps {
  title: string;
  description: string;
  icon?: string;
  gridColumn?: string;
  button?: string;
  className?: string;
  tag?: string;
}

// banner detail page

interface Banner {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgcolor: string;
}

// timeline
interface Event {
  year: string;
  title: string;
}

// cardWImage
interface CardWImageProps {
  cardWImageData: CardProps[];
  tags: string[];
  title: string;
  detailPageRoute: string;
}