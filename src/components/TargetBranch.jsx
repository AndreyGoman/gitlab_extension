import React from "react";

function TargetBranch({ references, name }) {
  return (
    <span className="project-ref-path has-tooltip" title="Target branch">
      <span className="s12" data-testid="branch-icon">
        &#10132;
      </span>
      <a
        className="ref-name"
        href={`${references.split("!")[0]}/-/commits/${name}`}
      >
        {name}
      </a>
    </span>
  );
}

export default TargetBranch;
