import { Typography } from 'antd';
import { Posts } from '../module';

const { Title } = Typography;

export function PostPage() {
    return (
        <section>
            <Title level={1} style={{ textAlign: 'center' }}>
                Post
            </Title>
            <Posts />
        </section>
    );
}
