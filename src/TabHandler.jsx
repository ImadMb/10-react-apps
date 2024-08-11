import React from 'react';
import Tabs from './Tabs';

function TabHandler() {
    const tabObject = [
        {
            label: 'Tab 1',
            content: 'this is tab 1'
        },
        {
            label: 'Tab 2',
            content: 'that googly moogly'
        },
        {
            label: 'Tab 3',
            content: 'THAT THANG IS JUICY'
        }
    ];

    return (
        <div className="tab-handler">
            <Tabs tabs={tabObject} />
        </div>
    );
}

export default TabHandler;
