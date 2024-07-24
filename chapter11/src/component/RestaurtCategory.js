import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurtCategory = ({data}) => {
    const [showList, setShowList] = useState(false)
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
        <div
          className="justify-between flex bg-gray-300 p-2"
          onClick={() => setShowList(!showList)}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showList && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurtCategory