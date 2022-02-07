function NewFeedbackRating({setRating,rate}) {
    const handleRating=(e)=>{
        setRating(+e.target.id<11 && +e.target.id>0? +e.target.id:20)
    }
    
  return (
    <div className="send-rating">
      <ul id="a">
          <li>
            <input type="radio" name="new-rating" id='1' onChange={e=>handleRating(e)} checked={rate===1}/>
            <label htmlFor="1">1</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='2' onChange={e=>handleRating(e)} checked={rate===2}/>
            <label htmlFor="2">2</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='3' onChange={e=>handleRating(e)} checked={rate===3}/>
            <label htmlFor="3">3</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='4' onChange={e=>handleRating(e)}checked={rate===4}/>
            <label htmlFor="4">4</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='5' onChange={e=>handleRating(e)}checked={rate===5}/>
            <label htmlFor="5">5</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='6' onChange={e=>handleRating(e)}checked={rate===6}/>
            <label htmlFor="6">6</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='7' onChange={e=>handleRating(e)}checked={rate===7}/>
            <label htmlFor="7">7</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='8' onChange={e=>handleRating(e)}checked={rate===8}/>
            <label htmlFor="8">8</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='9' onChange={e=>handleRating(e)}checked={rate===9}/>
            <label htmlFor="9">9</label>
          </li>
          <li>
            <input type="radio" name="new-rating" id='10' onChange={e=>handleRating(e)}checked={rate===10}/>
            <label htmlFor="10">10</label>
          </li>
          
      </ul>

    </div>
  );
}

export default NewFeedbackRating;
