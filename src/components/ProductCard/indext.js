import defaultImg from '../../assets/images/product_competitor.png'
function ProductCard(props){
    const img = props.img || defaultImg;
    const isBest = props.isBest;

    return(
        <div className={`flex w-full  shadow items-center mb-2 ${isBest ? 'h-20 bg-yellow' : 'h-16 bg-white'}`}>
            <img src={img} className={` ${isBest ? 'h-20 w-20' : 'h-16 w-16'}`} alt=""></img>
            <div className="flex-col w-full p-2">
                <h3 className="font-semibold">[Nama Product]</h3>
                <div className="flex justify-between">
                    <p className="">Rp XXXX</p>
                    <p className="">[jml terjual]</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;