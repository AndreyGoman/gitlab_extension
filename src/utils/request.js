async function request(queryParams) {
  const apiUrl = `${window.location.origin}/api/v4/`;

  if (Array.isArray(queryParams)) {
    const requests = queryParams.map((query) => fetch(`${apiUrl}${query}`));
    return Promise.all(requests)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((json) => {
        const data = [];
        json.forEach((item) => {
          if (Array.isArray(item)) {
            data.push(...item);
          } else data.push(item);
        });
        return data;
      });
  } else {
    return fetch(`${apiUrl}${queryParams}`)
      .then((response) => response.json())
      .then((json) => json);
  }
}

export default request;
