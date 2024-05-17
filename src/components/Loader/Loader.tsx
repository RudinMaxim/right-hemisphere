import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

/**
 * Renders a loading spinner indicator.
 * @returns A React element that displays a loading spinner.
 */
export function Loader() {
    return (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    );
}
