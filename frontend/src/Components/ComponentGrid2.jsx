import { useState, useEffect } from 'react';
import axios from 'axios';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ComponentGrid2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        phoneNo: ''
    });

    const layoutConfig = [
        { i: 'item2', x: 0, y: 0, w: 5.5, h: 10 }
    ];

    useEffect(() => {
        // Fetch latest user data
        const fetchLatestUserData = async () => {
            try {
                const response = await axios.get(`https://dataneuron-assessment-lvsj.onrender.com/api/getLatestUser`);
                const latestUserData = response.data.user;
                setFormData(latestUserData);
            } catch (error) {
                console.error('Error fetching latest user data:', error);
            }
        };

        fetchLatestUserData();
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://dataneuron-assessment-lvsj.onrender.com/api/updateUser`, formData);
            setFormData({
                name: '',
                email: '',
                designation: '',
                phoneNo: ''
            });
            console.log('Updated');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <GridLayout className="component-layout-2"  isDraggable={false} layout={layoutConfig} cols={12} rowHeight={40} width={1200}>
            <div key="item2" style={{ background: '#40a9ff' }}>
                <h1>Update User</h1>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/user-interface-flat-multicolor/5751-update-male-profile.png" className="updateuser-img" alt="" />
            <form className='component-two' onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" required />
                    <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} placeholder="Phone Number" required />
                    <button type="submit">Update</button>
                </form>
            </div>
        </GridLayout>
    );
};

export default ComponentGrid2;