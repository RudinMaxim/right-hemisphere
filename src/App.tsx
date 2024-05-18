import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import store from './store/store';

const { Content, Footer } = Layout;

export default function App() {
    return (
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
    );
}
