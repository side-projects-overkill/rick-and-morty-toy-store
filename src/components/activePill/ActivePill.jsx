import { Badge } from "@patternfly/react-core";
import "./ActivePill.scss";

function ActivePill({ content, isActive }) {
  return (
    <Badge
      key={1}
      screenReaderText="Unread Messages"
      className={isActive ? "active-pill-container" : "inactive-pill-container"}
    >
      {content}
    </Badge>
  );
}

export default ActivePill;