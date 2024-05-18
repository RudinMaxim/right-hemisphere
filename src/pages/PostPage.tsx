import { Typography } from 'antd';
import { Comments, Posts } from '../features';

const { Title } = Typography;

export function PostPage() {
    return (
        <section>
            <Title level={1} style={{ textAlign: 'center' }}>
                Post
            </Title>
            <Posts />
            <Comments/>
        </section>
    );
}
