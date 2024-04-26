import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ComponentGrid2 = () => {
    const layoutConfig = [
        { i: 'item2', x: 0, y: 0, w: 5.5, h: 10 }
    ];

    return (
        <GridLayout className="component-layout-2"  layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item2" style={{ background: '#40a9ff' }}>Item 2</div>
        </GridLayout>
    );
};

export default ComponentGrid2;