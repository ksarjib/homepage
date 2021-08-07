function cb(){
    console.log('Processed in next iteration');
  }
  setTimeout(function(){console.log('Processed in the xxx iteration')}, 1000);
  process.nextTick(cb);
  console.log('Processed in the first iteration');