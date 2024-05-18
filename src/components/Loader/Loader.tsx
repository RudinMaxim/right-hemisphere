import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

/**
 * Renders a loading spinner indicator.
 * @returns A React element that displays a loading spinner.
 */
export function Loader() {
    return (
        <Flex justify="center" align="middle">
            <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            />
        </Flex>
    );
}
