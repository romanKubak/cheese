import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getSub} from '../../redux/actions/categoriesAC'
export default function SubCategories() {
const dispatch = useDispatch()
const sub = useSelector(state => state.sub)
  const {id} = useParams()
  useEffect(() => {
    dispatch(getSub(id))
  },[id])
  return (
    <div>
{sub.length ? sub.map((sub)=>{
  <h4>{sub.title}</h4>
}): <h4>не нашел</h4>}

    </div>
  )
}
