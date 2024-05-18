import { Layout } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes.tsx';
import store from './store/store.ts';

const { Content, Footer } = Layout;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout className="ant-layout">
                <Content className="ant-layout-content">
                    <RouterProvider router={router} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    2024 © Рудин Максим, Тестовое задание: для Правого
                    Полушария Интроверта
                </Footer>
            </Layout>
        </Provider>
    </React.StrictMode>
);
