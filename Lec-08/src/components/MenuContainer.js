import MenuItem from "./MenuItem"
const MenuContainer = (props) =>{
    const {filterMenu} = props;
    return (
        <>
            <div>
                {
                    filterMenu.map((item)=><MenuItem itemInfo={item?.card?.info} key={item?.card?.info?.id} />)
                }
            </div>
        </>
    )
}

export default MenuContainer;