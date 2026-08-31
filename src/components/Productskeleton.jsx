import React from 'react'
import { ScanEye, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";

function Productskeleton() {
    return (
        <div className='border-2 border-slate-300 rounded-md shadow-md  px-2 '>
            <div className='border-b border-slate-200 m-1 bg-slate-400/30 rounded h-50 '>
            </div>
            <div className='border-t border-slate-300 space-y-2 px-2 py-2 '>
                <h3 className='font-bold text-xl line-clamp-2 h-10 bg-slate-400/30 ' ></h3>
                <p className='font-semibold  line-clamp-4 bg-slate-400/30 h-24'></p>
                <p className='font-bold bg-slate-400/30 h-8'>

                </p>
                <div className="flex justify-between">
                    <Link className="bg-slate-400/30 text-white h-10 rounded font-medium cursor-pointer flex items-center gap-1 justify-center w-4/12">

                    </Link>
                    <button className="bg-slate-400/30 text-white h-10  rounded font-medium cursor-pointer flex items-center gap-1 justify-center w-4/12">

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Productskeleton;