import {
    BuildOutlined,
    FieldTimeOutlined,
    HomeOutlined,
    MailOutlined,
    PhoneOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Descriptions, Space, Typography } from 'antd';
import { IUser } from '../../../types/User';
import { getAvatarBackgroundColor } from '../../../utils/getAvatarBackgroundColor';
import { initialsUser } from '../../../utils/initialsUser';

const { Meta } = Card;
const { Text, Link } = Typography;

/**
 * Renders a user information component that displays the user's name, username, email, address, phone, and company details.
 *
 * @param {Object} props - The component props.
 * @param {IUser} props.user - The user object containing the user's information.
 * @returns {JSX.Element} The rendered user information component.
 */
export function UserInfo({ user }: { user: IUser }): JSX.Element {
    const { name, username, email, address, phone, company } = user;
    const { street, suite, city, zipcode } = address;
    const { name: companyName, catchPhrase, bs } = company;

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Meta
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                avatar={
                    <Avatar
                        style={{
                            background: getAvatarBackgroundColor(name),
                            fontSize: '1rem',
                        }}
                    >
                        {initialsUser(name)}
                    </Avatar>
                }
                title={
                    <Text strong>
                        {name} #{username}
                    </Text>
                }
            />
            <Descriptions
                bordered
                column={{ xs: 1, sm: 2, md: 2, lg: 3 }}
                size="small"
                labelStyle={{ fontWeight: 'bold' }}
            >
                <Descriptions.Item label={<MailOutlined />}>
                    <Link href={`mailto:${email}`}>{email}</Link>
                </Descriptions.Item>
                <Descriptions.Item label={<HomeOutlined />}>
                    {street}, {suite}, {city}, {zipcode}
                </Descriptions.Item>
                <Descriptions.Item label={<PhoneOutlined />}>
                    <Link href={`tel:${phone}`}>{phone}</Link>
                </Descriptions.Item>
                <Descriptions.Item label={<BuildOutlined />}>
                    {companyName}
                </Descriptions.Item>
                <Descriptions.Item label={<SmileOutlined />}>
                    {catchPhrase}
                </Descriptions.Item>
                <Descriptions.Item label={<FieldTimeOutlined />}>
                    {bs}
                </Descriptions.Item>
            </Descriptions>
        </Space>
    );
}
