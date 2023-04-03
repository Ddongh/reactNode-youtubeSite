import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Subscribe(props) {

  const [SubscribeNumber, setSubscribeNumber] = useState(0)
  const [Subscribed, setSubscribed] = useState(false)
  useEffect((props) => {
  
    let variable = {userTo:props.userTo}
      
    Axios.post('/api/subscribe/subscribeNumber', variable)
      .then( response => {
        if(response.data.success) {
          console.log("11111", response.data)
          setSubscribeNumber(response.data.SubscribeNumber)
        } else {
          alert('구독자 수 정보를 받아 올 수 없습니다.')
        }
      })
  
    let subscribedVariable = { userTo: props.userTo, userFrom: localStorage.getItem('userId') }

    Axios.post('/api/subscribe/subscribed', subscribedVariable)
      .then(response => {
        if(response.data.success ) {
          console.log("22222", response.data)
          setSubscribed(response.data.subscribed)
        } else {
          alert('정보를 받아오지 못했습니다.')
        }
      })
  } , [])
  

  



  return (
    <div>
        <button
            style={{ 
              backgroundColor: `${Subscribed ? '#AAAAAA' : '#CC0000'}`, borderRadius: '4px',
              color:'white', padding:'10px 16px',
              fontWeight:'500', fontSize: '1rem', textTransform: 'uppercase'
            }}
            // onClick
        >
            {SubscribeNumber} {Subscribed ? 'Subscribed' : 'Subscribed'}
            
        </button>
    </div>
  )
}

export default 
Subscribe