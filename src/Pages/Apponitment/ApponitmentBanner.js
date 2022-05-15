import React, {useState} from 'react'
import DatePicker from "react-datepicker";

import chair from '../../assets/images/chair.png'

export default function ApponitmentBanner() {
     const [Date,setDate] = useState(new Date());
  return (
    <div>

<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <DatePicker 
    selected={Date}
     onSelect={(Date) => 
     setDate(Date)}
     dateFormat="Pp" />
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}
