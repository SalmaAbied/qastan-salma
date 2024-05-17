interface TabProps {
    tabId: string;
    activeTab: string;
    onClick: (tabId: string) => void;
    children: React.ReactNode;
  }
  