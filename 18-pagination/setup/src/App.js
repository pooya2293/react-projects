import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
 const {loading , data} = useFetch();
  const [page , setPage] = useState(0);
  const [followers,setFollowers] = useState([]);
  const [startPage ,setStartPage] = useState(0);
  const [endPage ,setEndPage] = useState(5);
  const [newData,setNewData] = useState([])

  useEffect(()=>{
    if(loading) return
    setFollowers(data[page]);
  
   setNewData(data.slice(startPage,endPage));
  },[loading,page])

  const handlePage = (index)=>{
    setPage(index);
  }

  const prev = ()=>{
    setPage((oldValue)=>{
      let prevPage = oldValue - 1;
      if(prevPage < 0){
        prevPage = data.length -1;
      }
      return prevPage
    })
  }

  const next = ()=>{
    setPage((oldValue)=>{
      let nextPage = oldValue + 1;
      if(nextPage > data.length - 1){
        nextPage = 0;
      }
      if(nextPage > endPage){
        setEndPage(2*5)
        setStartPage(5)
      }
      return nextPage
    })
  }

  return(
   <main>
    <div className="section-title">
     <h1>{loading?'loading...':'pagination'}</h1>
     <div className="underline"></div>
    </div>
    <section className="followers">
     <div className="container">
      {followers.map((follower)=>{
       return <Follower key={follower.id} {...follower} />
      })}
     </div>
        {!loading && <div className="btn-container">
          <button className="prev-btn" onClick={prev}>prev</button>
          {newData.map((item,index)=>{
            return(
              <button 
              className={`page-btn ${index === page?'active-btn':null}`}
              key={index}
              onClick={()=>handlePage(index)}>
                {index + 1}
              </button>
            )
          })}
          <button className="next-btn" onClick={next}>next</button>
        </div>}
    </section>
   </main>
  )
}

export default App
