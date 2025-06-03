import { useEffect, useState } from "react";


const TableData = () => {
    // fetching data of github users
    const URL = 'https://api.github.com/users';

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((jsonData) => jsonData.json())
            .then(data => setTableData(data))
            .catch(err => console.error(err))
    }, []);

    return <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                       id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        type_view
                    </th>

                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((user) => {
                        return     <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-6 py-4">
                    {user.id}
                </td>
                <td className="px-6 py-4">
                   {user.type}
                </td>
                <td className="px-6 py-4">
                   {user.id}
                </td>
            </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}

export default TableData;