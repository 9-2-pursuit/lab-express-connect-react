const BASE_URL = "http://localhost:3001/logs";

export function getAllLogs() {
  const request = fetch(`${BASE_URL}/`)
    .then((response) => response.json())
    .then((logList) => logList);

  return request;
}

export function getOneLog(index) {
  const request = fetch(`${BASE_URL}/${index}`)
    .then((response) => response.json())
    .then((oneLogData) => oneLogData)
    .catch((err) => console.log("Error getting one log"));
  return request;
}

export function deleteLog(index) {
  const request = fetch(`${BASE_URL}/${index}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((logsLessEliminated) => logsLessEliminated)
    .catch((err) => console.log("Error deleting"));
  
  return request;
}




//PUT====> para actualizar.
export function editLog(index, unitLog) {
  const request = fetch(`${BASE_URL}/${index}`, {
    method: "PUT",
    body: JSON.stringify(unitLog),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((logsUpdated) => logsUpdated)
    .catch((err) => console.log("Error updating"));
  return request;
}


//POST ===>para crear.
export function addNewLog(templateLog) {
  const request = fetch(`${BASE_URL}`, {
    method: "POST",
    body: JSON.stringify(templateLog),
    headers: { "Content-Type": "application/json" }
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => console.log("Error creating"));
  return request
}