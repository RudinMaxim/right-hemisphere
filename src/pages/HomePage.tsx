import { Typography } from 'antd';
import { Users } from '../module';

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
