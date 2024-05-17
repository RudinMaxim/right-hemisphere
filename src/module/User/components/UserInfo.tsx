import { Avatar, Card, Descriptions, Typography } from 'antd';
import { IUser } from '../../../types/User';
import { initialsUser } from '../../../utils/initialsUser';

const { Meta } = Card;
const { Text, Link } = Typography;

export function UserInfo({ user }: { user: IUser }): JSX.Element {
    const { name, username, email, address, phone, website, company } = user;
    const { street, suite, city, zipcode } = address;
    const { name: companyName, catchPhrase, bs } = company;

    return (
        <Meta
            avatar={<Avatar>{initialsUser(name)}</Avatar>}
            title={
                <Text strong>
                    {name} #{username}
                </Text>
            }
            description={
                <Descriptions column={1}>
                    <Descriptions.Item label="📧 Email">
                        <Link href={`mailto:${email}`}> {email}</Link>
                    </Descriptions.Item>
                    <Descriptions.Item label="🏠 Address">
                        {street}, {suite}, {city}, {zipcode}
                    </Descriptions.Item>
                    <Descriptions.Item label="📞 Phone">
                        <Link href={`tel:${phone}`}> {phone}</Link>
                    </Descriptions.Item>
                    <Descriptions.Item label="🏢 Company">
                        {companyName}
                    </Descriptions.Item>
                    <Descriptions.Item label="💡Catch Phrase">
                        {catchPhrase}
                    </Descriptions.Item>
                    <Descriptions.Item label="📈Business Summary">
                        {bs}
                    </Descriptions.Item>
                    <Descriptions.Item label="🌐 Website">
                        <Link href={`https://${website}`} target="_blank">
                            {website}
                        </Link>
                    </Descriptions.Item>
                </Descriptions>
            }
        />
    );
}
