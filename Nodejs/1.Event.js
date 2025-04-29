import event from 'events'

const newevent=new event()
newevent.on('start',(data)=>{
    console.log('event recieved',data)
})
newevent.emit('start','event send from myevent')