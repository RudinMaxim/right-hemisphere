import { Avatar, List } from 'antd';
import { User } from '../../types/User';
import { initialsUser } from '../../utils/initialsUser';

/**
 * Renders a list of users using the `List` component from Ant Design.
 *
 * @param {Object} props - The component props.
 * @param {User[]} props.users - An array of `User` objects to be displayed in the list.
 * @returns {JSX.Element} - The rendered `UserList` component.
 */
export function UserList({ users }: { users: User[] }): JSX.Element {
    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={(user) => <UserListItem user={user} />}
        />
    );
}

/**
 * Renders a single user item in a list, displaying the user's name, username, email, address, phone, website, and company information.
 *
 * @param {Object} props - The component props.
 * @param {User} props.user - The user object to display.
 * @returns {JSX.Element} - The rendered user list item.
 */
function UserListItem({ user }: { user: User }): JSX.Element {
    const { name, username, email, address, phone, website, company } = user;
    const { street, suite, city, zipcode } = address;
    const {name: companyName, catchPhrase, bs} = company

    return (
        <List.Item
            key={`UserListItem__${user.id}`}
            actions={[
                <span key="website">
                    <a
                        href={`https://${website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Website
                    </a>
                </span>,
            ]}
        >
            <List.Item.Meta
                avatar={<Avatar>{initialsUser(name)}</Avatar>}
                title={<span>{name} #{username}</span>}
                description={
                    <>
                        <p>{email}</p>
                        <p>{`${street}, ${suite}, ${city}, ${zipcode}`}</p>
                        <p>{phone}</p>
                        <p>
                            <strong>Company:</strong> {companyName}
                        </p>
                        <p>{catchPhrase}</p>
                        <p>{bs}</p>
                    </>
                }
            />
        </List.Item>
    );
}
