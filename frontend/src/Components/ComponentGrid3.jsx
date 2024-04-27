import { useState, useEffect } from 'react';
import axios from 'axios';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ComponentGrid3 = () => {
    const [latestUserData, setLatestUserData] = useState(null);

    const layoutConfig = [
        { i: 'item3', x: 0, y: 0, w: 12, h: 6 }
    ];

    useEffect(() => {
        const fetchLatestUserData = async () => {
            try {
                const response = await axios.get('https://dataneuron-assessment-lvsj.onrender.com/api/getLatestUser');
                setLatestUserData(response.data.user);
            } catch (error) {
                console.error('Error fetching latest user data:', error);
            }
        };

        fetchLatestUserData();
    }, []);

    return (
        <GridLayout className="component-layout-3" layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item3" style={{ background: '#73d13d' }}>
                <h2>Latest User Data</h2>
                {latestUserData && (
                    <div>
                        <p><strong>Name:</strong> {latestUserData.name}</p>
                        <p><strong>Email:</strong> {latestUserData.email}</p>
                        <p><strong>Designation:</strong> {latestUserData.designation}</p>
                        <p><strong>Phone Number:</strong> {latestUserData.phoneNo}</p>
                    </div>
                )}
            </div>
        </GridLayout>
    );
};

export default ComponentGrid3;
