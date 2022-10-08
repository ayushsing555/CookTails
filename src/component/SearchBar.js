import React,{useEffect, useRef} from 'react'
import { useGloBal } from '../Context'

const SearchBar = () => {
    const {searchItem, setSearchItem} = useGloBal();
    const searchValue  = useRef("");
    useEffect(()=>{
         searchValue.current.focus()
    },[])
    function myFuction(){
        setSearchItem(searchValue.current.value)
    }
    return (
        <>
            <div class=" container form-outline mb-4">
                <input ref={searchValue} onChange={myFuction} type="search" class="form-control" id="datatable-search-input" placeholder='Enter...'/>
            </div>
        </>
    )
}

export default SearchBar