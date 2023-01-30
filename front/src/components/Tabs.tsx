import { useState } from "react";
import { Tab1 } from "./Tab/Tab1";
import { Tab2 } from "./Tab/Tab2";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (index: number) => {
    setActiveTab(index);
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Tab1 />;
      case 2:
        return <Tab2 />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <header className="tabs-header">
        <div
          className={`tabs-header-tab ${activeTab === 1 ? "selected" : "inactive"}`}
          onClick={() => handleClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tabs-header-tab ${activeTab === 2 ? "selected" : "inactive"}`}
          onClick={() => handleClick(2)}
        >
          Tab 2
        </div>
      </header>
      <div className="tabs-content">{renderTabContent()}</div>
    </div>
  );
};
