import { Alert } from "antd";

interface ErrorProps {
    message?: string;
    description?: string;
}
/**
 * Renders an error alert with a message and optional description.
 *
 * @param message - The main error message to display.
 * @param description - An optional description to provide more details about the error.
 * @returns A React element representing the error alert.
 */
export function ErrorAlert({ message, description }: ErrorProps) {
    return (
        <Alert
            message={message ?? 'Something went wrong'}
            description={description}
            type="error"
            showIcon
        />
    );
}
