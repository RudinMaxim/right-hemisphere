import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export function NotFoundPage() {
    return (
        <div>
            <Title level={1} style={{ textAlign: 'center' }}>
                404 - Page Not Found
            </Title>
            <div style={{ textAlign: 'center' }}>
                <Link to="/right-hemisphere/">
                    <Button type="primary">Go to Home</Button>
                </Link>
            </div>
        </div>
    );
}
