async function retryRequest(promiseFunc, nrOfRetries) {
  let retries = 0;
  
  const	execute = async (resolve, reject) => {
    try {
          retries++;
          const result = await promiseFunc();
          return resolve(result);
    } catch(err) {
  	if(retries === nrOfRetries) {
    	return reject();
    }
  }
  return execute(resolve, reject);
  }
   return new Promise(execute);
}

        
let hasFailed = false;
function getUserInfo() {
  return new Promise((resolve, reject) => {
    if(!hasFailed) {
      hasFailed = true;
      reject("Exception!");
    } else {
      resolve("Fetched user!");
    }
  });
}
let promise = retryRequest(getUserInfo, 3);
if(promise) {
  promise.then((result) => console.log(result))
  .catch((error) => console.log("Error!"));
}
module.exports.retryRequest = retryRequest;