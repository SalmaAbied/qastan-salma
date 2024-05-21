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
