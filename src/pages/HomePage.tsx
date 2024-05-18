import { Typography } from 'antd';
import { Users } from '../features';

const { Title } = Typography;

export function HomePage() {
    return (
        <section>
            <Title level={1} style={{ textAlign: 'center' }}>
                Users
            </Title>
            <Users />
        </section>
    );
}
