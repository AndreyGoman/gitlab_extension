const API_VERSION = "v4";
const HOST = "https://gitlab.satellite-soft.ru:2443";
const MERGE_REQUESTS_URL = HOST + "/api/" + API_VERSION + "/merge_requests?";
const USER_URL = HOST + "/api/" + API_VERSION + "/user";
const ROOT_NODE_ID = "content-body";

let currentUser = {};

async function getMergeRequests(filter = "") {
  return fetch(MERGE_REQUESTS_URL + filter).then((r) => r.json());
}

async function getCurrentUser() {
  return fetch(USER_URL).then((r) => r.json());
}

function getHeaderTemplate(title) {
  return `
  <div class="page-title-holder d-flex align-items-center">
    <h1 class="page-title">${title}</h1>
    <div class="page-title-controls">
    </div>
  </div>`;
}

function getUserIcon(user) {
  return `<a class="author-link has-tooltip" title="Assigned to ${user.name}" data-container="body" data-qa-selector="assignee_link" href="${user.web_url}">
  <img width="16" class="avatar avatar-inline s16 js-lazy-loaded qa-js-lazy-loaded" alt="" src="${user.avatar_url}" loading="lazy">
</a>`
}

function getRowTemplate(item) {
  const isMerged = item.state === "merged";
  if (isMerged) return "";
  return `
    <li class="merge-request"><div class="issuable-info-container">
      <div class="issuable-main-info">
        <div class="merge-request-title title">
          <span class="merge-request-title-text js-onboarding-mr-item">
            <a class="js-prefetch-document" href="${item.web_url}">${item.title}</a>
          </span>
        </div>
        <div class="issuable-info">
          <span class="issuable-reference">${item.references.full}</span>
        </div>
      </div>
      <div class="issuable-meta"> <ul class="controls d-flex align-items-end">
        <li class="gl-display-flex gl-align-items-center">
          ${item.assignees.map(getUserIcon)}
        </li>
        <li class="gl-display-flex issuable-reviewers">
          ${item.reviewers.map(getUserIcon)}
        </li>
<li class="d-none d-sm-inline-block has-tooltip text-success" title="1 approver (you've approved)">
<svg class="s16 align-middle" data-testid="approval-solid-icon"><use href="/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#approval-solid"></use></svg>
Approved
</li>



<li class="issuable-comments gl-display-none gl-sm-display-block">
<a class="has-tooltip" title="Comments" href="/smarttrans-navicore/bns/-/merge_requests/1201#notes"><svg class="s16 gl-vertical-align-text-bottom" data-testid="comments-icon"><use href="/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#comments"></use></svg>
3
</a></li>

</ul>
<div class="float-right issuable-updated-at d-none d-sm-inline-block">
<span>
updated <time class="js-timeago merge_request_updated_ago" title="Sep 30, 2022 9:36am GMT" datetime="2022-09-30T05:36:30Z" data-toggle="tooltip" data-placement="bottom" data-container="body">2 months ago</time>
</span>
</div>
</div>
    </div></li>
  `;
}

function getMergeRequestsTemplate(items) {
  return `
    <ul class="content-list mr-list issuable-list">
      ${items.map(getRowTemplate).join("")}
    </ul>`;
}

async function render() {
  const myMergeRequests = await getMergeRequests("state=opened");
  const container = document.getElementById(ROOT_NODE_ID);
  const assignedMergeRequests = await getMergeRequests("scope=assigned_to_me&state=opened")
  const reviewMergeRequests = await getMergeRequests(`scope=all&state=opened&reviewer_id=${currentUser.id}`)

  container.innerHTML = `
    ${getHeaderTemplate("My merge requests")}
    ${getMergeRequestsTemplate(myMergeRequests)}
    ${getHeaderTemplate("Other merge requests")}
    ${getMergeRequestsTemplate([...assignedMergeRequests, ...reviewMergeRequests])}
  `;
}

async function main() {
  const container = document.getElementById(ROOT_NODE_ID);
  container.innerHTML = "loading...";
  currentUser = await getCurrentUser();
  render();
  // setInterval(render, 1000 * 60);
}

main();
