import React from 'react'
import ShareChart from '../../../common/Chart/Chart'
import Card from '../../../common/Card/Card'

const Chart = ({data}) => {
  return (
    <Card className="p-[3.2rem] bg-white my-[0.8rem] max-md:hidden">
    <h2 className="pb-[1.6rem]">نمودار فروش</h2>
    <ShareChart data={data?.map((x) => x.numberOfSales)} label={data?.map((x) => x.name)} />
  </Card>
  )
}

export default Chart