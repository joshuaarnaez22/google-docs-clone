import React from 'react'
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";
import { useRouter } from 'next/dist/client/router';

const DocumentRow = ({id,filename,date}) => {
    console.log(id, filename,date);
    return (
        <div className="flex items-center justify-between pb-5 text-gray-700 px-10">
            <Icon name="article" size="3xl" color="blue"/>
            <p className="font-medium flex-grow">{filename}</p>
            <p className="mr-12">{date?.toDate().toLocaleDateString()}</p>
        </div>
    )
}

export default DocumentRow
