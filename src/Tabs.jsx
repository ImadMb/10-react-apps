import React, { useState } from 'react';

function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    function handleToggleTab(index) {
        setActiveTab(index);
    }

    return (
        <div className="tabs">
            <div className="tab-list">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleToggleTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;
