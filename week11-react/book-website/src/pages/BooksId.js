import React from 'react'
import {useParams} from 'react-router-dom'

export default function BooksId(){
      // get value from route (destructuring assignment again)
      let { id } = useParams()
      
      return(
          <h1>Book ID: {id}</h1>
      )
}