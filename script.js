window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
 
    function getRandomTimeout() {
      return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
    }

    const promises = [
      new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), getRandomTimeout())),
      new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), getRandomTimeout())),
      new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), getRandomTimeout())),
      new Promise(resolve => setTimeout(() => resolve('Promise 4 resolved'), getRandomTimeout())),
      new Promise(resolve => setTimeout(() => resolve('Promise 5 resolved'), getRandomTimeout()))
    ];

    Promise.any(promises)
      .then(result => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = result;
      })
      .catch(error => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerText = 'All promises rejected: ' + error;
      });

