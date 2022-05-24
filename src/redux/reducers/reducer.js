let tokenId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "BUG_ADDED":
      return [
        ...state,
        {
          id: ++tokenId,
          description: action.payload,
          resolved: false,
        },
      ];
    case "BUG_REMOVED":
      return state.filter(item => {
        if (item.id != action.payload.id) {
          return item;
        }
      });
    case "BUG_RESOLVED":
      let arrData = [];
      state.filter(item => {
        if (item.id === action.payload.id && item.resolved === false) {
          let obj = { ...item, resolved: action.payload.resolved };
          arrData.push(obj);
        } else {
          let obj = item;
          arrData.push(obj);
        }
      });
      return arrData;
    default:
      return state;
  }
}
