import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ComponentGrid3 = () => {
    const layoutConfig = [
        { i: 'item3', x: 0, y: 0, w: 12, h: 10 }
    ];

    return (
        <GridLayout className="component-layout-3" layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item3" style={{ background: '#73d13d' }}>Item 3</div>
        </GridLayout>
    );
};

export default ComponentGrid3;