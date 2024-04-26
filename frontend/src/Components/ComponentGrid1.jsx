import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ComponentGrid1 = () => {
    const layoutConfig = [
        { i: 'item1', x: 0, y: 0, w: 4, h: 10},
    ];

    return (
        <GridLayout className="component-layout-1" layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item1" style={{ background: '#ff4d4f' }}>Item 1</div>
        </GridLayout>
    );
};

export default ComponentGrid1;