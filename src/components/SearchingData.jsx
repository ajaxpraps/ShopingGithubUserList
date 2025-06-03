import { useEffect, useState } from "react";

const SearchingData = () => {

    const [userList, setUserList] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [inputValue,setInputValue] = useState('');

    const fetchData = async () => {
        try {
            const URL = 'https://api.github.com/users';
            const serializedData = await fetch(URL);
            const data = await serializedData.json();
            setUserList(data);
            setFilteredData(data);
        } catch (err) {
            console.error(err);
        }
    }
    const onClickHandler = ()=>{
        // filter data on the basis on the basis of input value from filtered data then set it on userList
        if(inputValue==''){
            setUserList(filteredData);
            return;
        }
        const dataAfterFilter = filteredData.filter((user)=>(user.id==inputValue));
        setUserList(dataAfterFilter);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return <>
        <div>
            <label htmlFor="search">search :</label>
            <input type="text" placeholder="search" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="border border-gray-300 rounded-md m-2 p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-amber-200" onClick={onClickHandler}>SEARCH</button>
        </div>

        <div className="flex flex-wrap">
            {userList.map(({ id, type }) => {
                return <div key={id} className="w-64 h-32 bg-blue-500 text-white p-4 m-6">
                    <h1>{id}</h1>
                    <h5>usertype:{type}</h5>
                </div>
            })}
        </div>
    </>
}

export default SearchingData;