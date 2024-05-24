
import { Brands } from "@/lib/data"

function Brands_Sec() {
  return (
    <div className=" py-14">
        <div className="logos container w-full flex justify-between  ">
        {
          Brands.map(brand => (
            <img 
            className="w-[160px] cursor-pointer"
             src={brand.brand} 
             alt={brand.name} 
             key={brand.name}
            />
          ))
        } 
      </div>
    </div>
  )
}

export default Brands_Sec