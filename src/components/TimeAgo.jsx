import React from "react";
import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import clsx from "clsx";

function TimeAgo({ value, className }) {
  const date = React.useMemo(() => new Date(value), [value]);

  return (
    <time
      className={clsx("js-timeago", className)}
      title={format(date, "LLL d, yyyy H:mm")}
      datetime={value}
      data-toggle="tooltip"
      data-placement="bottom"
      data-container="body"
    >
      {formatDistanceToNow(date, { addSuffix: true })}
    </time>
  );
}

export default TimeAgo;
