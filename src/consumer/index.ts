const consumer = require('../lib/rabbitmq/worker')


let retry = 0
consumer.start(function (err:Error) {
  if(err) return  console.log(`rabbitmq error`,err);
  console.log('Consumer started.')
})
