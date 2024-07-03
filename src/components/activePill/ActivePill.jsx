import { Badge } from "@patternfly/react-core";
import "./ActivePill.scss";

function ActivePill({ content }) {
  return (
    <Badge
      key={1}
      screenReaderText="Unread Messages"
      className="active-pill-container"
    >
      {content}
    </Badge>
  );
}

export default ActivePill;
