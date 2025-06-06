import axios from 'axios';
import { useEffect , useState} from 'react';

const Pagination = ()=>{

    const [productList,setProductList] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
    const PAGE_LENGHT = 4;
    const countOfPages = Math.ceil(productList.length/PAGE_LENGHT);
    
    const fetchData =async()=>{
      const URL = 'https://dummyjson.com/products';
      const data = await axios.get(URL);
      setProductList(data?.data?.products);
      console.log(data?.data?.products);
    }
    const start = currentPage*PAGE_LENGHT;
    const end = start+PAGE_LENGHT;

    const handlePageChange =(num)=>{
        setCurrentPage(num);
    }
    const prevPage = ()=>{
        setCurrentPage((prev)=>prev-1);
    }

    const nextPage = ()=>{
        setCurrentPage((prev)=>prev+1);
    }
   
    useEffect(()=>{
        fetchData();
    },[]);

    return <>
    <div className='m-5 flex justify-center'>
        <button disabled={currentPage === 0} onClick={prevPage}><span className='m-2 border-2 p-2' >prev.</span></button>
        {...Array(countOfPages).keys().map((num)=>{
          return <button onClick={()=>handlePageChange(num)}><span className={'m-2 border-2 p-2 '+(num === currentPage? 'bg-amber-300' : '')} key={num}>{num+1}</span></button>
        })}
        <button disabled={currentPage === countOfPages-1} onClick={nextPage}><span className='m-2 border-2 p-2' >next.</span></button>
    </div>
     <div className="flex flex-wrap">
            {productList.slice(start,end).map((product) => {
                return <div key={product.id} className="w-64 h-32 bg-blue-500 text-white p-4 m-6">
                    <h1>Id : {product.id}</h1>
                    <h5>Title:{product.title}</h5>
                     <h5>Desc.:{product.description}</h5>
                </div>
            })}
        </div>
    </>
}

export default Pagination;