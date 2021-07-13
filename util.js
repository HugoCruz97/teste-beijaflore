const calculaHorario = (horario, segundos) => {
    let receivedSeconds = segundos
    let hour;
    let minute;
    let second;
    const separatedHours = horario.split(":")
    separatedHours.map((item, index) => {
 
      switch(index){
        case 2:
          if(parseInt(item, 10) + receivedSeconds >= 60) {
            second = parseInt(item, 10) + receivedSeconds - 60;
            receivedSeconds = receivedSeconds - second

            console.log("segundos: ", second)
          }
        break;
        case 1:
          let subMinute = parseInt(item, 10) + receivedSeconds
          if(parseInt(item, 10) + receivedSeconds >= 60) {
            while(subMinute > 59) {
              subMinute = parseInt(item, 10) - receivedSeconds
              minute = parseInt(item, 10) + 1;
            }
            console.log("minutos: ", minute)
          }
          
        break;
        case 0:
         let subHour = parseInt(item, 10) + receivedSeconds
          if(parseInt(item, 10) + receivedSeconds >= 3600) {
            while(subHour >= 3600) {
              subHour = parseInt(item, 10) - receivedSeconds
              hour = parseInt(item, 10) + 1;
            }
          } else {
            hour = parseInt(item, 10)
          }
          console.log("hora: ", hour)
        break;  
      }
    })
    console.log(`${hour}:${minute}:${second}`)
}

calculaHorario("0001:01:01", 72)