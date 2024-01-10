import React from 'react'
import Card from '../../../common/Card/Card'

const BestSeller = ({data}) => {
  return (
    <Card className="py-[3.2rem] px-[2.6rem] bg-white mb-[0.8rem] ">
    <h2 className="text-[1.8rem] font-semibold w-fit pb-[1.6rem]">پر فروش ها</h2>
    <hr />
    {data
      ?.sort((a, b) => b.numberOfSales - a.numberOfSales)
      .slice(0, 3)
      .map((x) => (
        <div className="flex items-center gap-[1rem] font-medium text-[1.5rem] pt-[3.6rem]">
          <img src={x.imgLink} className="rounded-[0.8rem]" />
          <h5 className="self-start w-1/2 text-start py-[0.8rem] px-[1.2rem]">{x.name}</h5>
          <div className="self-start text-start py-[0.8rem] px-[1.2rem]">
            <h5> {x.price} </h5>
            <badge> {x.activity} </badge>
          </div>
        </div>
      ))}
  </Card>
  )
}

export default BestSeller