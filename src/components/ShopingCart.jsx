import axios from 'axios';
import {useState,useEffect,useContext} from 'react';
import { MyContext } from '../MyContext';
import { counterSlice } from '../redux/counterSlice';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from '../redux/counterSlice';

const ShopingCart = ()=>{
     const URL = 'https://api.github.com/users';
    
        const [userList, setUserList] = useState([]);
        const {count,setCount} = useContext(MyContext);

        // redux
         const countValue = useSelector((state)=>state.counter.value);
         const dispatch = useDispatch();

        // redux
        useEffect(() => {
            axios.get(URL)
                .then(data =>setUserList(data?.data))
                .catch(err => console.error(err))
        }, []);

        return <>
           <div className="flex flex-wrap">
            {
            userList.map(({ id, type }) => {
                
                   return  <div  key={id} className="w-64 h-40 bg-blue-500 text-white p-4 m-6 cursor-pointer">
                    <h1>{id}</h1>
                    <h5>usertype:{type}</h5>
                    <button onClick={()=>setCount((prev)=>prev+1)} className='bg-amber-300 text-amber-950'>Add to Cart</button>
                    <br/>
                    <br/>
                    <button onClick={()=>dispatch(incrementByAmount(id))} className='bg-amber-300 text-amber-950'>Redux Counter</button>
                </div> 
            })
            }
        </div>
        </>
}

export default ShopingCart;