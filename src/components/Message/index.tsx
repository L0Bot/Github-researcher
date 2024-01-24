import { Message as MessageUI } from 'semantic-ui-react';

interface MessageProps {
  message: string;
}

// function Message({ message }: MessageProps) {
//   return (<MessageUI>{message}</MessageUI>);
// }
function Message(props: MessageProps) {
  const { message } = props;
  return (<MessageUI>{message}</MessageUI>);
}

export default Message;
