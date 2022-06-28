import React from 'react'
import {Stacked, Pie, Button, SparkLine} from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import {useStateContext} from '../contexts/ContextProvider'
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { useParams } from 'react-router-dom';

const Analysis = () => {
    const {currentColor} = useStateContext();
    {/*http://localhost:3000/Analysis/PCS_PP/123*/}
    const {product, commitid} = useParams('product', 'commitid');
    return (
        <div className="mt-12">
            <div className="flex flex-wrap justify-center ">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 
                rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Product Name</p>
                            <p className="text-2xl">{product}</p>
                            <p className="text-2xl">{commitid}</p>                            
                            <div className="mt-8"><Button 
                            color="white"
                            bgColor={currentColor}
                            text="Download Result Data"
                            borderRadius="10px"
                            size="md"
                            />
                            </div>
                        </div>  
                        
                    </div>
                </div> {/* ernings image text layout end */}

                <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
                    <div key={'sam'} className="bg-white h-44 dark:text-gray-200 
                                dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                        <button
                        type="button"
                        style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                        className="text-2xl opacity-0.9 rounded-full  
                                    p-4 hover:drop-shadow-xl"
                        >
                        <MdOutlineSupervisorAccount />
                        </button>
                        <p className="mt-3">
                        <span className="text-lg font-semibold">{'test1'}</span>
                        <span className={`text-sm text-${'red-600'} ml-2`}>
                        {'-4%'}
                        </span>
                        </p>
                        <p className="text-sm text-gray-400  mt-1">{'SAM Score'}</p>
                    </div>{/*SAM layout end*/}
                    <div key={'Coverity'} className="bg-white h-44 dark:text-gray-200 
                                dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                        <button
                        type="button"
                        style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                        className="text-2xl opacity-0.9 rounded-full  
                                    p-4 hover:drop-shadow-xl"
                        >
                        <MdOutlineSupervisorAccount />
                        </button>
                        <p className="mt-3">
                        <span className="text-lg font-semibold">{'test1'}</span>
                        <span className={`text-sm text-${'red-600'} ml-2`}>
                        {'-4%'}
                        </span>
                        </p>
                        <p className="text-sm text-gray-400  mt-1">{'Coverity Result'}</p>
                    </div>{/*Coverity layout end*/}
                    <div key={'Coverity'} className="bg-white h-44 dark:text-gray-200 
                                dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
                        <button
                        type="button"
                        style={{ color: '#03C9D7', backgroundColor: '#E5FAFB' }}
                        className="text-2xl opacity-0.9 rounded-full  
                                    p-4 hover:drop-shadow-xl"
                        >
                        <MdOutlineSupervisorAccount />
                        </button>
                        <p className="mt-3">
                        <span className="text-lg font-semibold">{'test1'}</span>
                        <span className={`text-sm text-${'red-600'} ml-2`}>
                        {'-4%'}
                        </span>
                        </p>
                        <p className="text-sm text-gray-400  mt-1">{'TAM Result'}</p>
                    </div> {/*TAM layout end*/}               
                </div>
            </div> {/*icon-layout end */}

        </div>
    )
}

export default Analysis