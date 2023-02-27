import {
    CalendarOutlined, DatabaseOutlined, FileOutlined, LeftOutlined, MessageOutlined, PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, notification, Tooltip, Typography } from 'antd';
import 'antd/dist/antd.css';
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSiderCollapse, updateState } from '../actions';
import DashboardContent from './DashboardContent';
import useWindowDimensions from './hooks/useDimensionHook';
import './index.scss';
const { Title } = Typography;

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', 'dashboard', <PieChartOutlined />, [
        getItem('Ecommerce', 'dash-ecom'),
        getItem('Saas', 'dash-saas'),
        getItem('Crypto', 'dash-crypto'),
    ]),
    getItem('Calendar', 'calendar', <CalendarOutlined />),
    getItem('Chat', 'chat', <MessageOutlined />),
    getItem('File Manager', 'file-manager', <DatabaseOutlined />),
    getItem('Ecommerce', 'app-ecom', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Teams', 'sub2', <TeamOutlined />, [getItem('Team-1', '6'), getItem('Team-2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Index = () => {
    const [collapsed, setCollapsed] = useState(false);
    const siderCollapse = useSelector(state => state.data.siderCollapse)
    const { height, width } = useWindowDimensions();
    const notifRef = React.useRef(null)
    const dispatch = useDispatch()
    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyListen)
        return () => {
            window.removeEventListener('keydown', handleKeyListen)
        }
    })

    console.log('in woidth', width, collapsed)

    React.useEffect(() => {
        !notifRef.current && notification.open({
            message: <strong>Shortcuts</strong>,
            description: <><div><strong>Alt + c</strong>  Toggle sidebar</div><div><strong>Alt + r</strong>  Update data</div></>
        });
        notifRef.current = true
    }, [])
    const handleKeyListen = (e) => {
        if (!e.shiftKey && !e.ctrlKey && e.altKey) {
            if (e.key.toLowerCase() === 'c') {
                setCollapsed(!collapsed)
            }
            else if (e.key.toLowerCase() === 'r') {
                dispatch(updateState({}))
            }
        }
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                collapsible
                breakpoint="md"
                collapsedWidth="0"
                trigger={
                    <motion.div
                        className="box"
                        animate={{ x: 0, y: 0, rotate: !collapsed ? 0 : 180 }}
                        transition={{ type: "spring" }}>
                        <Tooltip title="Alt + c">{<LeftOutlined />}</Tooltip>
                    </motion.div>}
                collapsed={collapsed}
                zeroWidthTriggerStyle={{ top: '14px' }}
                className="layout-sider-container"
                onCollapse={(value) => {
                    setCollapsed(value)
                    dispatch(updateSiderCollapse(value))
                }}
            >
                <motion.div className='text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}>
                    <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
                </motion.div>
            </Sider>
            <Layout className="site-layout">
                <Layout.Content className={`dashboard-content-container`}>
                    <DashboardContent category='Dashboard' />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Index;