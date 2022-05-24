export function BugAdded(description) {
  return {
    type: "BUG_ADDED",
    payload: description,
  };
}

export function BugRemoved(id) {
  return {
    type: "BUG_REMOVED",
    payload: {
      id: id,
    },
  };
}

export function BugResolved(id) {
  return {
    type: "BUG_RESOLVED",
    payload: {
      id: id,
      resolved: true,
    },
  };
}
