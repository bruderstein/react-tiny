
export const DATA_FETCHED = 'DATA_FETCHED';

export default function fetchData(id) {
  
  // Here we can make an asynchronous call, we'll just emulate it with setTimeout for now.
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: 'Data for ' + id }), 500)
  }).then(response => {
    // Return the action we want to send as the result of the promise
    return {
      type: 'DATA_FETCHED',
      payload: {
        id: id,
        response: response
      }
    };
  });
};

