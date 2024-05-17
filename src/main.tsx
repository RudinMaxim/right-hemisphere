import { Layout } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import AppRoutes from './routes.tsx';
import store from './store/store.ts';

const { Content, Footer } = Layout;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout className="ant-layout">
                <Content className="ant-layout-content">
                    <AppRoutes />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    2024 © Рудин Максим для "Правое Полушарие Интроверта"
                </Footer>
            </Layout>
        </Provider>
    </React.StrictMode>
);
